import React from "react";

export function Header() {
  return (
    <div style={{ width: 350, margin: "0 auto" }}>
      <span style={{ color: "green", fontWeight: "bold" }}>奈良ピアノMAP</span>
      <br />
      誰もがピアノに触れるよう、奈良県の会場・施設・店舗・駅等の情報を集積しています。改善のご提案・ご感想は
      <a href="mailto:shuta.hagimori@gmail.com">こちら</a>
      までよろしくお願いします。
    </div>
  );
}
