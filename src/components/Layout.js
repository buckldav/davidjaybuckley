import React from 'react'
import $ from 'jquery'
import 'foundation-sites'

class Layout extends React.Component {

  componentDidMount() {
    $(document).foundation();
  }

  render() { 
    return(
      <>
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
            <div className="grid-container">
              <br/>
              <img className="thumbnail" src="https://placehold.it/550x350" alt="placeholder"/>
              <h5>David Buckley</h5>
              <p>Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo.</p>
            </div>
          </div>
          <div className="off-canvas-content" data-off-canvas-content>
            <div className="title-bar hide-for-large">
              <div className="title-bar-left">
                <button className="menu-icon" type="button" data-open="my-info"></button>
                <span className="title-bar-title">David Buckley</span>
              </div>
            </div>
            {this.props.children}
          </div>
        </div>
      </>
    )
  }
}

export default Layout;