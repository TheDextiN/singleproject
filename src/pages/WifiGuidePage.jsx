import { useState } from 'react'
import { wifiGuides } from '../data/wifiGuides'

/** Interactive guide for the three Wi-Fi access types available at Griffith. */
export default function WifiGuidePage() {
  const [audience, setAudience] = useState('griffith')
  const guide = wifiGuides[audience]

  return (
    <section className="wifi-page">
      <div className="wifi-hero">
        <p className="campus-label light">Campus essentials</p>
        <h1>Connect to Griffith Wi-Fi</h1>
        <p>Choose the network that matches how you&apos;re visiting, then follow the steps below.</p>
      </div>

      <div className="wifi-layout">
        <aside>
          <span>Choose your access</span>
          {/* This loop creates one selector for each Wi-Fi audience in the data file. */}
          {Object.entries(wifiGuides).map(([id, item]) => (
            <button
              className={audience === id ? 'active' : ''}
              key={id}
              onClick={() => setAudience(id)}
            >
              <b>{item.label}</b>
              <small>{item.network}</small>
            </button>
          ))}
          <div className="wifi-note">
            <b>Before you start</b>
            <p>
              You must be on campus. Update your device software and forget any
              old Griffith connection if reconnecting.
            </p>
          </div>
        </aside>

        {/* key restarts the small content animation when an access type changes. */}
        <article className="wifi-steps" key={audience}>
          <div className="network-name"><span>Wi-Fi network</span><b>{guide.network}</b></div>
          <h2>{guide.label}</h2>
          <p>{guide.intro}</p>
          <ol>
            {/* This loop numbers and displays every instruction for the active guide. */}
            {guide.steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <div className="wifi-support">
            <div>
              <b>Need help connecting?</b>
              <p>Contact the Griffith IT Service Centre: (07) 3735 5555 for Brisbane campuses.</p>
            </div>
            <a href="https://www.griffith.edu.au/internet-access/wifi/getting-connected" target="_blank" rel="noreferrer">
              Official device guides ↗
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
