export default function handler(req, res) {
  res.status(200).json({
    le_title: "初期化中",
    le_description: "少しお待ちください",
    le_status_dl: "言語ファイルをダウンロードしています",
    sd_home_bb_home: "Home",
    sd_home_bb_notification: "Notification",
    sd_home_bb_menu: "Menu",
  });
}
