const config = generateDeploymentConfig("app_sample");

config.google_drive.sheets_folder_ids =  ["1k8zJfBeOm18gYDsk0XmdUm7OFtZDUY9R", "1rFg8qsmb3xSOXw_9Iwxk8RgSmyjqiao9"];
config.google_drive.assets_folder_ids = ["1KcHDI7O4o2_FZ_YlXsz-8OqN3ehsfdVf", "1tr76W9OusHHkjJ4DNR84x-B26VgGCSFy"];

config.git = {
  content_repo: "https://github.com/IDEMSInternational/app-sample-content.git",
  content_tag_latest: "0.0.0",
};

config.android = {
  app_id:'international.idems.app_sample',
  app_name:'SAMPLE APP',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.ios = {
  app_id: 'international.idems.app-sample',
  app_name: 'SAMPLE APP',
}

config.web.favicon_asset = "images/logos/bird_on_light.svg";
config.api.db_name = "app_sample"

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "SAMPLE APP";
config.app_config.APP_HEADER_DEFAULTS.title = "SAMPLE APP";
config.app_config.NOTIFICATION_DEFAULTS.title = "SAMPLE APP";
config.app_config.NOTIFICATION_DEFAULTS.text = "SAMPLE APP";

config.error_logging = { dsn: "https://7be381bf4ab14ca5b7b937e417397fcf@app.glitchtip.com/6314"};

export default config;
