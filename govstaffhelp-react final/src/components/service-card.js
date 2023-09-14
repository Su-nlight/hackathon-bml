import React from 'react'

import PropTypes from 'prop-types'

import './service-card.css'

const ServiceCard = (props) => {
  return (
    <div className={`service-card-container ${props.rootClassName} `}>
      <a
        href="http://www.digilocker.gov.in/"
        target="_blank"
        rel="noreferrer noopener"
        className="service-card-link"
      >
        <h1 className="service-card-text TextXL gov-tool-head">
          {props.heading}
        </h1>
      </a>
    </div>
  )
}

ServiceCard.defaultProps = {
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  heading: 'Digilocker',
  rootClassName: '',
}

ServiceCard.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ServiceCard
