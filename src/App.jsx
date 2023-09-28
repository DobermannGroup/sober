import Logo from '../src/assets/logo.svg'
import './App.css'

function App() {

  return (
    <div className="card-contain">
      <div className="lasHeader">
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <div className="card">
        <div className="section">
          <div className="HeaderHero"><i className="fa-kit fa-regular-beer-mug-circle-xmark"></i></div>
          <h1>Sober October Challenge</h1>
          <h2>Make a track in 31 days</h2>

          <p>Welcome to Sober October's 31-day rollercoaster of sobriety and sound! Buckle up, because every morning at 7AM UK time, we're dialing into Zoom for an exclusive session with the mega talented and devilishly handsome Jake Oliver. <br /><br />By the end of the month, you won't just be sober; you'll also be a track-producing maestro!</p>
          <p>Want the crispest sound and smoothest experience? Don't settle for browser-based mediocrity. Download the Zoom app and let's make this a month to remember!</p>
          <div className="actionBar">

            <div className="downloadPrompt"><a href="https://zoom.us/download" target="_blank"><button className="downloadZoom"><i className="fa-duotone fa-download fa-bounce"></i> Download Zoom</button></a></div>
          </div>
        </div>
        <div className="section">
          <h1>The DAW</h1>
          <h2>Ableton Live 11 Suite</h2>

          <p>This is a 90 day free trial, giving you full access to the entire Live 11 tools that grant you endless capabilities. </p>
          <div className="actionBar">
            <a href="https://www.ableton.com/en/trial/" target="_blank"><button>Download Ableton Live 11 Trial</button></a>
          </div>
        </div>
        <div className="section">
          <h1>Plugins</h1>
          <h2>FREE TOOLS</h2>
          <p>Useful tools that you'll see being used in this course.</p>
          <div className="actionBar downloads">
            <a href="../cdn/STING.amxd" download><button><i className="fa-duotone fa-download fa-beat-fade"></i> STING.AMXD (<i className="fa-duotone fa-music"></i> 418kb)</button></a>
            <a href="../cdn/ROZZER_ASS.amxd" download><button><i className="fa-duotone fa-download fa-beat-fade"></i> ROZZER.AMXD (<i className="fa-duotone fa-music"></i> 305kb)</button></a>
            <a href="https://dl.u-he.com/releases/Podolski_123_12092_Win.zip" download><button><i className="fa-duotone fa-download fa-beat-fade"></i> Podolski VST (<i className="fa-brands fa-windows"></i> 34.2mb)</button></a>
            <a href="https://dl.u-he.com/releases/Podolski_123_12092_Mac.zip" download><button><i className="fa-duotone fa-download fa-beat-fade"></i> Podolski VST (<i className="fa-brands fa-apple"></i> 56.6mb)</button></a>
          </div>
        </div>

        <div className="section">
          <h1>Sample Packs</h1>
          <h2>FREE SOUNDS</h2>
          <p>Sample Packs to get you started.</p>
          <div className="actionBar downloads">
            <a href="../cdn/SAMPLE_PACK01.zip" target="_blank" download><button><i className="fa-duotone fa-download fa-beat-fade"></i> HOUSE ESSENTIALS (<i className="fa-duotone fa-cube"></i> 3.1mb)</button></a>
          </div>
        </div>

        <div className="section">
          <h1>The Podcast</h1>
          <h2>Stream latest episode</h2>
          <div className="podcastVideo"><iframe width="100%" src="https://www.youtube.com/embed/mGihWTWcdok?si=DPWYT7IaKoTUEr3b" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          <div className="actionBar podcasts">
            <a href="https://youtu.be/mGihWTWcdok?si=H7kcFg9C_B2V4_W-" target="_blank"><button><i className="fa-brands fa-youtube"></i> Watch on YouTube</button></a>
            <a href="https://podcasts.apple.com/gb/podcast/life-after-sesh/id1697429061" target="_blank"><button><i className="fa-brands fa-apple"></i> Apple Podcasts</button></a>
            <a href="https://open.spotify.com/show/1bwQAcU92WwJTgT2oiNCNv?si=5ecb82478b0c4623" target="_blank"><button><i className="fa-brands fa-spotify"></i> Spotify</button></a>
            <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8yMjE4MTI2LnJzcw?sa=X&ved=2ahUKEwjgk5y7zrCAAxW4QKQEHeKiAXcQ9sEGegQIARAC" target="_blank"><button><i className="fa-brands fa-google"></i> Google Podcasts</button></a>
            <a href="https://music.amazon.co.uk/podcasts/9c3cd345-1616-452a-9061-37987e35ebb9/life-after-sesh" target="_blank"><button><i class="fa-brands fa-amazon"></i> Amazon Podcasts</button></a>
          </div>
        </div>

        <div className="section">
          <div className="schedule">
            <div className="iconHeader"><i class="fa-regular fa-clock-six-thirty fa-spin"></i></div>
            <h1>Course Schedule</h1>
            <table>
              <tbody>
                <tr><td className="schedule-date">Week 1</td><td className="schedule-task"><ul><li>Introduction and Basic Setup</li></ul></td></tr>
                <tr><td className="schedule-date">Day 1</td><td className="schedule-task"><ul><li>Introduction to Ableton Live 11 Suite</li><li>Overview of DAW (Digital Audio Workstation)</li></ul></td></tr>
                <tr><td className="schedule-date">Day 2</td><td className="schedule-task"><ul><li>Installation and Setup</li><li>Software installation and audio setup</li></ul></td></tr>
                <tr><td className="schedule-date">Day 3</td><td className="schedule-task"><ul><li>User Interface and Basic Tools</li><li>Understanding the UI elements</li></ul></td></tr>
                <tr><td className="schedule-date">Day 4</td><td className="schedule-task"><ul><li>Tracks and Clips</li><li>Introduction to audio and MIDI tracks, clips</li></ul></td></tr>
                <tr><td className="schedule-date">Day 5</td><td className="schedule-task"><ul><li>Basic Recording</li><li>Recording your first audio and MIDI clips</li></ul></td></tr>
                <tr><td className="schedule-date">Day 6</td><td className="schedule-task"><ul><li>Effects and Plugins</li><li>Adding basic effects like reverb and delay</li></ul></td></tr>
                <tr><td className="schedule-date">Day 7</td><td className="schedule-task"><ul><li>Overview of Week 1</li><li>Quick review and practice session</li></ul></td></tr>
                <tr><td className="schedule-date">Week 2</td><td className="schedule-task"><ul><li>Drums and Rhythm</li></ul></td></tr>
                <tr><td className="schedule-date">Day 8</td><td className="schedule-task"><ul><li>Introduction to Drum Rack</li><li>Loading and configuring Drum Rack</li></ul></td></tr>
                <tr><td className="schedule-date">Day 9</td><td className="schedule-task"><ul><li>Programming Drums</li><li>Creating a basic drum pattern</li></ul></td></tr>
                <tr><td className="schedule-date">Day 10</td><td className="schedule-task"><ul><li>Drum Mixing</li><li>Equalization, compression, and panning</li></ul></td></tr>
                <tr><td className="schedule-date">Day 11</td><td className="schedule-task"><ul><li>Groove and Swing</li><li>Adding groove to your drum patterns</li></ul></td></tr>
                <tr><td className="schedule-date">Day 12</td><td className="schedule-task"><ul><li>Sampling</li><li>Incorporating samples into your drum track</li></ul></td></tr>
                <tr><td className="schedule-date">Day 13</td><td className="schedule-task"><ul><li>Layering Drums</li><li>Using layering techniques for a fuller sound</li></ul></td></tr>
                <tr><td className="schedule-date">Day 14</td><td className="schedule-task"><ul><li>Overview of Week 2</li><li>Make a beat using only the samples provided - Homework task for the weekend</li></ul></td></tr>
                <tr><td className="schedule-date">Week 3</td><td className="schedule-task"><ul><li>Melody and Harmony</li></ul></td></tr>
                <tr><td className="schedule-date">Day 15</td><td className="schedule-task"><ul><li>Basic Music Theory</li><li>Scales, chords, and progressions</li></ul></td></tr>
                <tr><td className="schedule-date">Day 16</td><td className="schedule-task"><ul><li>MIDI Instruments</li><li>Loading and playing instruments via MIDI</li></ul></td></tr>
                <tr><td className="schedule-date">Day 17</td><td className="schedule-task"><ul><li>Creating Melodies</li><li>Composing a simple melody</li></ul></td></tr>
                <tr><td className="schedule-date">Day 18</td><td className="schedule-task"><ul><li>Adding Chords</li><li>Building a chord progression</li></ul></td></tr>
                <tr><td className="schedule-date">Day 19</td><td className="schedule-task"><ul><li>Bassline</li><li>Crafting a complementary bassline</li></ul></td></tr>
                <tr><td className="schedule-date">Day 20</td><td className="schedule-task"><ul><li>Arpeggiators</li><li>Introducing Ableton's Arpeggiator effect</li></ul></td></tr>
                <tr><td className="schedule-date">Day 21</td><td className="schedule-task"><ul><li>Overview of Week 3</li><li>Quick review and practice session</li></ul></td></tr>
                <tr><td className="schedule-date">Week 4</td><td className="schedule-task"><ul><li>Arrangement and Structure</li></ul></td></tr>
                <tr><td className="schedule-date">Day 22</td><td className="schedule-task"><ul><li>Song Structure</li><li>Understanding common song structures</li></ul></td></tr>
                <tr><td className="schedule-date">Day 23</td><td className="schedule-task"><ul><li>Arrangement View</li><li>Using Arrangement View for structuring</li></ul></td></tr>
                <tr><td className="schedule-date">Day 24</td><td className="schedule-task"><ul><li>Transitions</li><li>Creating smooth transitions between sections</li></ul></td></tr>
                <tr><td className="schedule-date">Day 25</td><td className="schedule-task"><ul><li>Automation</li><li>Automating volume, pan, and effects</li></ul></td></tr>
                <tr><td className="schedule-date">Day 26</td><td className="schedule-task"><ul><li>Final Mix</li><li>Preparing your track for mastering</li></ul></td></tr>
                <tr><td className="schedule-date">Day 27</td><td className="schedule-task"><ul><li>Exporting</li><li>Exporting your track for distribution</li></ul></td></tr>
                <tr><td className="schedule-date">Day 28</td><td className="schedule-task"><ul><li>Overview of Week 4</li><li>Final review and next steps</li></ul></td></tr>
              </tbody>
            </table>
          </div>
          <div className="footerMast">
            <div><i className="fa-regular fa-face-saluting"></i></div>
            <h1>See you there</h1>
            <p>Rest assured, you don't need a shred of experience to dive into this course. We've crafted it to be a breezy yet inspiring introduction to the world of music production. Get ready to unlock your creative potential in a fun and engaging way!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App