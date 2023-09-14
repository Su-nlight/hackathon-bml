import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-container1">
        <div className="footer-container2">
          <h1 className="footer-text TextXL">Connect with us</h1>
          <div className="footer-container3">
            <a
              href="https://x.com/mygovindia?s=20"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <div className="footer-container4 social-links">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="footer-icon"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </div>
            </a>
            <a
              href="https://www.facebook.com/MyGovIndia?mibextid=9R9pXO"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link1"
            >
              <div className="footer-container5 social-links">
                <svg viewBox="0 0 1024 1024" className="footer-icon2">
                  <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h416v-448h-128v-128h128v-64c0-105.8 86.2-192 192-192h128v128h-128c-35.2 0-64 28.8-64 64v64h192l-32 128h-160v448h288c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-container6"></div>
      <span className="footer-text1">
        <span className="TextSM">Copyright © 2023</span>
        <br></br>
      </span>
    </div>
  )
}

export default Footer
