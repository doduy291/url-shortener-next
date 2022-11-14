/* Packages */
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
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

/* Components */
import Button from "~/components/Button";
import Loader from "~/components/Loader";
const Modal = dynamic(() => import("~/components/Modal"), { ssr: false });

const Box = () => {
  const debounce = useDebounce();
  const urlRef = useRef<HTMLInputElement>(null);
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

  return (
    <div className={styles.box}>
      <div className={styles.inputWrapper}>
        <span className={styles.headInput}>
          <Image
            src={chainIcon}
            alt="icon"
            width={27}
            height={27}
            style={{ pointerEvents: "none" }}
          />
        </span>

        <label className={styles.textareaLabel}>
          <input
            className={styles.input}
            ref={urlRef}
            placeholder="Paste a link to shorten it"
          />
        </label>

        <div className={styles.btnInput}>
          <Button title="Shorten" type="gradient" onClick={shortenHandler} />
        </div>
      </div>
      <div className={clsx({ fade: createSlugLink.isLoading })}>
        {createSlugLink.isLoading && <Loader style={{ marginTop: "2rem" }} />}
      </div>
      {createSlugLink.isError && (
        <div className={styles.message} data-message="error">
          {errorMsgTRPC(createSlugLink.error.shape?.message)}
        </div>
      )}
      {createSlugLink.isSuccess && (
        <div
          className={clsx(styles.inputWrapper, styles["inputWrapper--short"])}
        >
          <a
            href={`${baseUrl()}/${createSlugLink.data.slug}`}
            target="_blank"
            rel="noreferrer"
            className={styles.shortLink}
          >{`${baseUrl()}/${createSlugLink.data.slug}`}</a>
          <div className={styles.btnGroup}>
            <Button
              title="QR Code"
              type="common"
              onClick={() => setVisible((currentState) => !currentState)}
              style={{
                fontSize: "16px",
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
                fontSize: "16px",
                padding: "0.6rem 1rem",
                borderRadius: "6px",
              }}
            />
          </div>
        </div>
      )}
      {isVisible && (
        <Modal>
          <div className="modal__container" ref={clickRef}>
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
            <div
              className="modal__closeWrapper"
              onClick={() => setVisible(false)}
            >
              <svg
                className="modal__closeIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M6.414 5A1 1 0 1 0 5 6.414L10.586 12 5 17.586A1 1 0 1 0 6.414 19L12 13.414 17.586 19A1 1 0 1 0 19 17.586L13.414 12 19 6.414A1 1 0 1 0 17.586 5L12 10.586 6.414 5Z"></path>
              </svg>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Box;
