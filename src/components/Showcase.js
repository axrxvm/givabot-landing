import Link from "next/link";
import Image from "next/image";

import botOnlineStatus from "../utils/images/botStatus.svg";

const Showcase = () => {
  return (
    <>
      <main className="showcase">
        <h1 className="showcase-header h-color">Giva Bot</h1>
        <h2 className="showcase-header-text h-color">
          The only discord bot you need!
        </h2>
        <p className="showcase-para p-color">
          Multi-purpose discord bot with 150+ commands, 24/7 uptime, and a lot of features!
        </p>
        <h3 className="retirement-message h-color">
          Giva Bot is now retired. Thank you for your support!
        </h3>
      </main>
    </>
  );
};

export default Showcase;
