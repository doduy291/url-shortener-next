import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import clsx from "clsx";
import QRCode from "react-qr-code";
import Button from "~/components/Button";
import styles from "../home.module.scss";
import chainIcon from "~/assets/icon/link-chain.svg";
import { trpc } from "~/libs/trpc";
import { baseUrl, copyToClipboard } from "~/utils/helpers";
const Modal = dynamic(() => import("~/components/Modal"), { ssr: false });

const Box = () => {
  // const utils = trpc.useContext();
  const urlRef = useRef<HTMLInputElement>(null);
  const createSlugLink = trpc.shortener.createSlugLink.useMutation();

  const shortenHandler = () => {
    const urlValue = urlRef.current?.value;
    if (!urlValue) return;

    return createSlugLink.mutate({ url: urlValue });
  };

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
        <input
          className={styles.input}
          ref={urlRef}
          placeholder="Paste a link to shorten it"
        />
        <div className={styles.btnInput}>
          <Button title="Shorten" type="gradient" onClick={shortenHandler} />
        </div>
      </div>
      {/* {createSlugLink.isSuccess && ( */}
      <div className={clsx(styles.inputWrapper, styles["inputWrapper--short"])}>
        <a
          href={`${baseUrl()}`}
          target="_blank"
          rel="noreferrer"
          className={styles.shortLink}
        >{`${baseUrl()}/${createSlugLink.data?.slug || "test"}`}</a>
        <div className={styles.btnGroup}>
          <Button
            title="QR Code"
            type="common"
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
              copyToClipboard(
                `${baseUrl()}/${createSlugLink.data?.slug || "test"}`,
              )
            }
            style={{
              fontSize: "16px",
              padding: "0.6rem 1rem",
              borderRadius: "6px",
            }}
          />
        </div>
      </div>
      <Modal>
        <div className="justify-center">
          <QRCode
            value={`${baseUrl()}/${createSlugLink.data?.slug || "SmXEWEWK"}`}
            size={168}
            level={"L"}
          />
        </div>
        <Button
          title="Download as image"
          type="common"
          style={{ marginTop: "1rem" }}
        />
      </Modal>
      {/* )} */}
    </div>
  );
};

export default Box;
