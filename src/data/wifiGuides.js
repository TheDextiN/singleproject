/**
 * Wi-Fi instructions paraphrased from Griffith's official support pages.
 * Each entry feeds both the audience tabs and the numbered instruction list.
 */
export const wifiGuides = {
  griffith: {
    label: 'Students & staff',
    network: 'Griffith University',
    intro: 'Use your Griffith account for full access to university resources and the internet.',
    steps: [
      'Be on a Griffith campus and make sure Wi-Fi is turned on.',
      'Open your device Wi-Fi settings and choose “Griffith University”.',
      'On Windows, enable “Connect automatically”, then select Connect.',
      'Enter your Griffith Uni ID (for example, s1234567) and your Griffith password.',
      'If asked about the wireless.griffith.edu.au certificate, review it and accept to finish connecting.',
    ],
  },
  public: {
    label: 'Visitors',
    network: 'Griffith Public WiFi',
    intro: 'Free basic internet access for visitors without a Griffith or participating eduroam account.',
    steps: [
      'Open Wi-Fi settings while you are on any Griffith campus.',
      'Select the “Griffith Public WiFi” network.',
      'Open a web browser and select the Griffith Public WiFi tile.',
      'Follow the registration prompts and provide an email address or mobile number.',
      'Use the registration details sent to you by email or SMS to complete access.',
    ],
  },
  eduroam: {
    label: 'Visiting academics',
    network: 'eduroam',
    intro: 'For visitors whose home educational institution participates in the eduroam federation.',
    steps: [
      'Set up eduroam using the instructions and credentials supplied by your home institution.',
      'When you arrive at Griffith, open your device Wi-Fi settings.',
      'Select “eduroam” from the available networks.',
      'Sign in using the full username and password format required by your home institution.',
      'Contact your home institution’s IT team if your credentials are not accepted.',
    ],
  },
}
