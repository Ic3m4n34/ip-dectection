1. First, in Advanced Ads, add a CSS class to the add. like `google-adsense`
![add CSS class to ad](documentation/css-class.png)

2. set this class globally to `display: none`
![set .google-adsense to display none](documentation/display-none.png)

3. edit the `show-ads-by-ip.js` to your liking. For this example, I'm showing the ads to all users from Germany and hide it for everybody else.
![show ads to german users](documentation/country-codes.png)

4. upload `show-ads-by-ip.js` via FTP to your `/wp-content`-folder
![upload `show-ads-by-ip.js` to `/wp-content`-folder](documentation/upload.png)

5. install Header and Footer Scripts plugin
![install Header and Footer Scripts plugin](documentation/header-and-footer-scripts.png)

6. find the pulugin under Settings --> Header and Footer Script
![Settings](documentation/settings.png)

7. Paste this line: `<script src="/wp-content/show-ads-by-ip.js"></script>` in the header section
![paste the code](documentation/plugin.png)
