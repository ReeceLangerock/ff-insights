import React from 'react'

export default function Instructions() {
    return (
        <div>
            <p>
            Unfortunately, for a private league you'll need to do a little bit
            of extra work in the developer panel of your web browser. I'll add a
            detailed walkthrough of this in the future.
          </p>
          <ol>
            <li>Open up developer panel. </li>
            <li>
              <b>Chrome / Brave: </b>Go to the application tab and open cookies
              on the left.
              <br />
              <b>Firefox / Safari: </b>Go to the storage tab and open cookies on
              the left
            </li>
            <li>
              Select the cookie for fantasy.espn and then search for the entry
              for swid and espn_s2.
            </li>
          </ol>
        </div>
    )
}
