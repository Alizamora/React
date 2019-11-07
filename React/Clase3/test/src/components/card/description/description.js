import React from 'react'
import './description.css'

export default props => <div className='description' dangerouslySetInnerHTML={{__html:props.description}}/>