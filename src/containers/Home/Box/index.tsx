import Image from "next/image";
import React, { useRef } from "react";
import Button from "~/components/Button";
import styles from "../home.module.scss";
import chainIcon from "public/icon/link-chain.svg";
import { trpc } from "~/utils/trpc";
import { baseUrl } from "~/utils/helpers";

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
      <div className={styles.linkWrapper}>
        <span className={styles.shortLink}>{`${baseUrl()}/${
          createSlugLink.data?.slug || "test"
        }`}</span>
        <div className={styles.btnGroup}>
          <Button title="Copy" type="" onClick={shortenHandler} />
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Box;
