/* Packages */
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import clsx from "clsx";
import QRCode from "react-qr-code";

/* Module styling */
import styles from "../home.module.scss";

/* Assets */
import chainIcon from "~/assets/icon/link-chain.svg";

/* Libs, Utils */
import { trpc } from "~/libs/trpc";
import {
  baseUrl,
  copyToClipboard,
  downloadQRSvgAsPNG,
  errorMsgTRPC,
} from "~/utils/helpers";
import { httpRegex } from "~/utils/constants";

/* Hooks */
import useClickAwayListner from "~/hooks/useClickAwayListener";
import useDebounce from "~/hooks/useDebounce";
import useWindowDimensions from "~/hooks/useWindowDimensions";

/* Components */
import Button from "~/components/Button";
import Loader from "~/components/Loader";
const Modal = dynamic(() => import("~/components/Modal"), { ssr: false });

const Box = () => {
  const { widthDimension } = useWindowDimensions();
  const debounce = useDebounce();
  const urlRef = useRef<HTMLInputElement>(null);
  const [, setDoesExistURL] = useState<boolean>(false);
  const createSlugLink = trpc.shortener.createSlugLink.useMutation();
  const { clickRef, isVisible, setVisible } = useClickAwayListner(false);

  const shortenHandler = () =>
    debounce(() => {
      let urlValue = urlRef.current?.value;
      if (!urlValue) return;
      if (!httpRegex.test(urlValue)) {
        urlValue = "http://" + urlValue;
      }

      return createSlugLink.mutate({ url: urlValue });
    }, 500);

  const otherShortenHandler = () => {
    if (urlRef.current?.value) {
      urlRef.current.value = "";
      setDoesExistURL((currentValue) => !currentValue);
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.inputWrapper}>
        <span className={styles.headInput}>
          <Image src={chainIcon} alt="icon" />
        </span>

        <label className={styles.textareaLabel}>
          <input
            className={styles.input}
            ref={urlRef}
            placeholder="Paste a link"
          />
        </label>
        {widthDimension > 768 && (
          <div className={styles.btnInput}>
            {!urlRef.current?.value ? (
              <Button
                title="Shorten"
                type="gradient"
                onClick={shortenHandler}
              />
            ) : (
              <Button
                title="Other URL"
                type="gradient"
                onClick={otherShortenHandler}
              />
            )}
          </div>
        )}
      </div>
      {widthDimension <= 769 && (
        <div className={clsx(styles.btnInput, "mt-1")}>
          {!urlRef.current?.value ? (
            <Button
              title="Shorten"
              type="gradient"
              onClick={shortenHandler}
              style={{ fontSize: "1rem", padding: "0.813rem 2rem" }}
            />
          ) : (
            <Button
              title="Other URL"
              type="gradient"
              onClick={otherShortenHandler}
              style={{ fontSize: "1rem", padding: "0.813rem 2rem" }}
            />
          )}
        </div>
      )}
      <div className={clsx({ fade: createSlugLink.isLoading as boolean })}>
        {createSlugLink.isLoading && <Loader style={{ marginTop: "2rem" }} />}
      </div>
      {createSlugLink.isError && (
        <div className={styles.message} data-message="error">
          {errorMsgTRPC(createSlugLink.error.shape?.message)}
        </div>
      )}
      {createSlugLink.isSuccess && (
        <>
          <div
            className={clsx(styles.inputWrapper, styles["inputWrapper--short"])}
          >
            <a
              href={`${baseUrl()}/${createSlugLink.data.slug}`}
              target="_blank"
              rel="noreferrer"
              className={styles.shortLink}
            >{`${baseUrl()}/${createSlugLink.data.slug}`}</a>
            {widthDimension > 568 && (
              <div className={styles.btnGroup}>
                <Button
                  title="QR Code"
                  type="common"
                  onClick={() => setVisible((currentState) => !currentState)}
                  style={{
                    fontSize: "1rem",
                    padding: "0.6rem 1rem",
                    borderRadius: "6px",
                  }}
                />
                <Button
                  title="Copy"
                  type="common"
                  onClick={() =>
                    copyToClipboard(`${baseUrl()}/${createSlugLink.data.slug}`)
                  }
                  style={{
                    fontSize: "1rem",
                    padding: "0.6rem 1rem",
                    borderRadius: "6px",
                  }}
                />
              </div>
            )}
          </div>
          {widthDimension <= 568 && (
            <div className={clsx(styles.btnGroup, "mt-1")}>
              <Button
                title="QR Code"
                type="common"
                onClick={() => setVisible((currentState) => !currentState)}
                style={{
                  fontSize: "1rem",
                  padding: "0.6rem 1rem",
                  borderRadius: "6px",
                }}
              />
              <Button
                title="Copy"
                type="common"
                onClick={() =>
                  copyToClipboard(`${baseUrl()}/${createSlugLink.data.slug}`)
                }
                style={{
                  fontSize: "1rem",
                  padding: "0.6rem 1rem",
                  borderRadius: "6px",
                }}
              />
            </div>
          )}
        </>
      )}
      {isVisible && (
        <Modal clickRef={clickRef} onClose={() => setVisible(false)}>
          <div className="justify-center">
            <QRCode
              id="qrcode"
              value={baseUrl() + "/" + createSlugLink.data?.slug}
              size={168}
              level={"L"}
            />
          </div>
          <Button
            title="Download as image"
            type="common"
            style={{ marginTop: "1rem" }}
            onClick={() =>
              downloadQRSvgAsPNG(createSlugLink.data?.slug as string)
            }
          />
        </Modal>
      )}
    </div>
  );
};

export default Box;
