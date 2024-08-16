# easy-spanish-translator README

This is a VSCode extension that requires an API key for accessing external services. This guide will help you to get and configure the API key in the extension settings.

## Features

**easy-spanish-translator** allow you to easily translate and replace a selected english tense to the spanihs language.

## Requirements

This extension require a subscribtion to the [Microsoft Translator Text API](https://rapidapi.com/apiship-apiship-default/api/Microsoft%20Translator%20Text%20API), this guide will help you to using RapidAPI and configure your Token for use in this extension.

### Step 1: Sign Up or Log In to RapidAPI

- Visit [RapidAPI](https://rapidapi.com) and either log in with your existing account or sign up for a new account (You can sign up using your email, Google, or GitHub account.)

### Step 2: Navigate to Microsoft Translator Text API

- Once logged in, go to the [Microsoft Translator Text API page](https://rapidapi.com/apiship-apiship-default/api/Microsoft%20Translator%20Text%20API).
- Review the API documentation and pricing details to ensure it meets your needs.

### Step 3: Subscribe to the API

- On the API's page, click the **"Subscribe to Test"** button.
- Choose a subscription plan that fits your usage requirements. RapidAPI offers various plans, including a free tier with limited usage.
- After selecting a plan, confirm your subscription. You may need to provide payment details if you choose a paid plan.

### Step 4: Obtain Your API Key

- Once subscribed, go to the **"Endpoints"** tab on the API's page.
- You'll find your API key in the **"X-RapidAPI-Key"** field. This key is essential for authenticating your requests to the Microsoft Translator Text API.
- Copy the API key to use it in the **easy-spanish-translator** extension.


### Step 5: Installation

- Install the extension from the VSCode marketplace.
- Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and search for `Extensions: Install Extensions`.
- Search for **`Easy Spanish Translator`** and click "Install".

### Step 6: Setting up the API Token

To use the **easy-spanish-translator** extension, you need to provide an API key. This API key will be stored in your VSCode settings and will be used to authenticate your requests to the external API.

#### Steps to configure the token:

1. Open the **Command Palette**:
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).

2. Type and select `Preferences: Open Settings (UI)`.

3. In the search bar at the top, type `Easy Spanish Translator` to filter the settings related to the extension.

4. Select the Workspace tab.

5. Find the setting labeled `Token`.

6. Enter your API key in the provided input field.

7. Press `Enter` to save the token


---

## Troubleshooting

- API Key Issues: Ensure your API key is correct and that you have selected the correct API host in your request headers.

- Quota Limits: If you exceed your plan's usage limits, you may need to upgrade your subscription or wait until your quota resets.

- Error Responses: Consult the API documentation on RapidAPI for details about error messages and how to handle them.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
