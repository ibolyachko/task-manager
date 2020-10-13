import React from 'react';

import './styles/index.scss';

export const Source = () => {
  return (
    <>
      <main>
        <div className="controls">
          <button className="button-create-task">New Task</button>
        </div>
        <div className="wrap">
          <div className="list">
            <div className="tasks">
              <div className="task">
                <span className="title">Template description</span>
                <div className="meta">
                  <span className="deadline">27 Nov 2020</span>
                  <span className="tag first">Sketch</span>
                </div>
              </div>
              <div className="task">
                <span className="title">Budget and contract</span>
                <div className="meta">
                  <span className="deadline">03 Sep 2020</span>
                  <span className="tag first">Sketch</span>
                </div>
              </div>
              <div className="task completed">
                <span className="title">Search for a UI kit</span>
                <div className="meta">
                  <span className="deadline">14 Aug 2020</span>
                  <span className="tag second">Spotify</span>
                </div>
              </div>
              <div className="task selected">
                <span className="title">Design new dashboard</span>
                <div className="meta">
                  <span className="deadline">02 Nov 2020</span>
                  <span className="tag second">Spotify</span>
                </div>
              </div>
              <div className="task completed">
                <span className="title">Design search page</span>
                <div className="meta">
                  <span className="deadline">23 Sep 2020</span>
                  <span className="tag second">Spotify</span>
                </div>
              </div>
              <div className="task">
                <span className="title">Template description</span>
                <div className="meta">
                  <span className="deadline">27 Nov 2020</span>
                  <span className="tag third">Dribble</span>
                </div>
              </div>
              <div className="task">
                <span className="title">Budget and contract</span>
                <div className="meta">
                  <span className="deadline">03 Sep 2020</span>
                  <span className="tag third">Dribble</span>
                </div>
              </div>
              <div className="task">
                <span className="title">Search for a UI kit</span>
                <div className="meta">
                  <span className="deadline">14 Aug 2020</span>
                  <span className="tag third">Dribble</span>
                </div>
              </div>
              <div className="task completed">
                <span className="title">Design new dashboard</span>
                <div className="meta">
                  <span className="deadline">02 Nov 2020</span>
                  <span className="tag third">Dribble</span>
                </div>
              </div>
              <div className="task">
                <span className="title">Design search page</span>
                <div className="meta">
                  <span className="deadline">23 Sep 2020</span>
                  <span className="tag third">Dribble</span>
                </div>
              </div>
              <div className="task">
                <span className="title">Design new dashboard</span>
                <div className="meta">
                  <span className="deadline">02 Nov 2020</span>
                  <span className="tag fourth">Behance</span>
                </div>
              </div>
              <div className="task">
                <span className="title">Design search page</span>
                <div className="meta">
                  <span className="deadline">23 Sep 2020</span>
                  <span className="tag fourth">Behance</span>
                </div>
              </div>
              <div className="task">
                <span className="title">Design new dashboard</span>
                <div className="meta">
                  <span className="deadline">02 Nov 2020</span>
                  <span className="tag fifth">UX</span>
                </div>
              </div>
              <div className="task">
                <span className="title">Design search page</span>
                <div className="meta">
                  <span className="deadline">23 Sep 2020</span>
                  <span className="tag fifth">UX</span>
                </div>
              </div>
            </div>
          </div>
          <div className="task-card">
            <div className="head">
              <button className="button-complete-task">Mark as complete</button>
              <button className="button-remove-task"/>
            </div>
            <div className="content">
              <input type="text" placeholder="Task title" className="title"/>
              <div className="deadline">
                <span className="label">Due to</span>
                <span className="date">14 AUG 2020</span>
              </div>
              <div className="description">
                <span className="label">Description</span>
                <textarea className="text" placeholder="Describe your event">
                  There is no denying the fact that the success of an advertisement
                  lies mostly in the headline. The headline should attract the reader.
                </textarea>
              </div>
              <div className="checklist">
                <span className="label">Checklist</span>
                <div className="sub-tasks">
                  <div className="sub-task completed">
                    <input type="text" value="Design new home page"/>
                  </div>
                  <div className="sub-task incompleted">
                    <input type="text" value="Send design samples to the customer"/>
                  </div>
                  <div className="sub-task">
                    <input type="text" placeholder="Add more"/>
                  </div>
                </div>
              </div>
              <div className="tags">
                <span className="tag first">Sketch</span>
                <span className="tag second">Spotify</span>
                <span className="tag third">Dribble</span>
                <span className="tag fourth">Behance</span>
                <span className="tag fifth">UX</span>
              </div>
              <div className="form-controls">
                <button className="button-reset-task">Reset</button>
                <button className="button-save-task">Save</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <span>© 2019 Lectrum LLC - All Rights Reserved.</span>
      </footer>
    </>
  )
};
