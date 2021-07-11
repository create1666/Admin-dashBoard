import React from 'react'
import './Widgetsm.css'
import {Visibility }from '@material-ui/icons';
export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <h2 className='widgetSmTitle'> New user</h2>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-shan-patel-2876486.jpg&fm=jpg" alt="portrait of man wearing shell choker necklace" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Boluwaji</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetEyeIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-shan-patel-2876486.jpg&fm=jpg" alt="portrait of man wearing shell choker necklace" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Boluwaji</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetEyeIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-shan-patel-2876486.jpg&fm=jpg" alt="portrait of man wearing shell choker necklace" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Boluwaji</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetEyeIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-shan-patel-2876486.jpg&fm=jpg" alt="portrait of man wearing shell choker necklace" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Boluwaji</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetEyeIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-shan-patel-2876486.jpg&fm=jpg" alt="portrait of man wearing shell choker necklace" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Boluwaji</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetEyeIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
