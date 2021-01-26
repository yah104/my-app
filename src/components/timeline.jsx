import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at OmniSync Inc. <span>2021-present</span></h2>
                        <p>* I recently have joined OmniSync Inc. as a Software Developer-Intern in the Fullstack team.</p>
                        <p>Company: OmniSync Inc.</p>
                        <p>Location: San Diego, CA</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Computer Science Tutor <span>01/2020-03/2020</span></h2>
                        <p>* Helped students solve their coding problems on projects and answered logical questions in Intro Java course.</p>
                        <p>* Answered questions regarding course concepts on Piazza for Java programming.</p>
                        <p>Company: UCSD Jacobs School of Engineering</p>
                        <p>Location: San Diego, CA</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research and Development Assistant Intern <span>07/2019-08/2019</span></h2>
                        <p>* Assembled magnetic sensors in the Production Department.</p>
                        <p>* Tested experiments and wrote experiment reports about high-temperature resistance of the magnetic sensor.</p>
                        <p>Company: Magtron Intelligent Tech Inc.</p>
                        <p>Location: Jiaxing, Zhejiang, China</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Financial Market Department Assistant Intern <span>06/2017-08/2017</span></h2>
                        <p>* Read and checked data for personal loans for housing and printed documents.</p>
                        <p>Company: China Minsheng Banking Corp-Jiaxing, Zhejiang</p>
                        <p>Location: Jiaxing, Zhejiang, China</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
