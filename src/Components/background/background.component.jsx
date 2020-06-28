import React from 'react';
import Sky from 'react-sky';

const Background = () => (
    <Sky
    images={{
      0:require("../../assets/background120w/gate, border, barrier, wireless, arrow, move_120px.png"),
      1:require("../../assets/background120w/air conditioner, ac, home, appliance, wireless, remote, control_120px.png"),
      2:require("../../assets/background120w/alert, warning, danger, exclaimation, siren_120px.png"),
      3:require("../../assets/background120w/battery, charge, power, energy, home, house, smart home_120px.png"),
      4:require("../../assets/background120w/door, front, entrance, exit, wireless, keypad, home_120px.png"),
      5:require("../../assets/background120w/gear, settings, options, preferences, wireless, house, home_120px.png"),
      6:require("../../assets/background120w/humidifier, air, humid, electronic, device, wireless, control_120px.png"),
      7:require("../../assets/background120w/keypad, door handle, door, entrance, wireless_120px.png"),
      8:require("../../assets/background120w/microwave, oven, kitchen, appliance, wireless, cooking_120px.png"),
      9:require("../../assets/background120w/preferences, options, settings, smart home, home, house, smartphone_120px.png"),
      10:require("../../assets/background120w/smartphone, smart home, home, house, control, wireless_120px.png"),
      11:require("../../assets/background120w/speaker, ai, electronic, device, alexa, sound, audio_120px.png"),
      12:require("../../assets/background120w/website, browser, webpage, smart home, home, house, connect_120px.png"),
      13:require("../../assets/background120w/wireless, lightbulb, light, lighting, home, house, smart home_120px.png"),
      14:require("../../assets/background120w/garden, gardening, plants, watering, wireless, smart home_120px.png"),
      15:require("../../assets/background120w/garden, plant, growth, power, energy, home, house_120px.png"),
      16:require("../../assets/background120w/lock, protection, privacy, confirm, smartphone, house, home_120px.png"),
      17:require("../../assets/background120w/modem, wireless, internet, electronic, device_120px.png"),
      18:require("../../assets/background120w/radiator, heater, electronic, appliance, wireless, control_120px.png"),
      19:require("../../assets/background120w/security, camera, protection, surveillance, electronic, device, wireless_120px.png"),
      20:require("../../assets/background120w/security, protection, shield, confirm, complete, house, home_120px.png"),
    }}
    how={100} /* Pass the number of images Sky will render chosing randomly */
    time={60} /* time of animation */
    size={'50px'} /* size of the rendered images */
    />
)





export default Background;