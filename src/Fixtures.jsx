import './App.css'

function Fixtures() {
  const fixtures = [
    {
      id: 1,
      date: "May 1, 2026",
      time: "15:00",
      home: "Premier FC",
      away: "Rival United",
      homeLogo: "https://ui-avatars.com/api/?name=PF&background=3b82f6&color=fff&size=80&font-size=0.4&bold=true",
      awayLogo: "https://ui-avatars.com/api/?name=RU&background=ef4444&color=fff&size=80&font-size=0.4&bold=true",
      venue: "Premier Stadium",
      competition: "Premier League"
    },
    {
      id: 2,
      date: "May 8, 2026",
      time: "17:30",
      home: "City Wanderers",
      away: "Premier FC",
      homeLogo: "https://ui-avatars.com/api/?name=CW&background=10b981&color=fff&size=80&font-size=0.4&bold=true",
      awayLogo: "https://ui-avatars.com/api/?name=PF&background=3b82f6&color=fff&size=80&font-size=0.4&bold=true",
      venue: "City Arena",
      competition: "Premier League"
    },
    {
      id: 3,
      date: "May 15, 2026",
      time: "20:00",
      home: "Premier FC",
      away: "Town FC",
      homeLogo: "https://ui-avatars.com/api/?name=PF&background=3b82f6&color=fff&size=80&font-size=0.4&bold=true",
      awayLogo: "https://ui-avatars.com/api/?name=TF&background=f59e0b&color=fff&size=80&font-size=0.4&bold=true",
      venue: "Premier Stadium",
      competition: "Premier League"
    },
    {
      id: 4,
      date: "May 22, 2026",
      time: "15:00",
      home: "United Athletic",
      away: "Premier FC",
      homeLogo: "https://ui-avatars.com/api/?name=UA&background=8b5cf6&color=fff&size=80&font-size=0.4&bold=true",
      awayLogo: "https://ui-avatars.com/api/?name=PF&background=3b82f6&color=fff&size=80&font-size=0.4&bold=true",
      venue: "United Ground",
      competition: "FA Cup Semi-Final"
    },
    {
      id: 5,
      date: "May 29, 2026",
      time: "16:00",
      home: "Premier FC",
      away: "Valley Rovers",
      homeLogo: "https://ui-avatars.com/api/?name=PF&background=3b82f6&color=fff&size=80&font-size=0.4&bold=true",
      awayLogo: "https://ui-avatars.com/api/?name=VR&background=ec4899&color=fff&size=80&font-size=0.4&bold=true",
      venue: "Premier Stadium",
      competition: "Premier League"
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <h2>Upcoming Fixtures</h2>
        <div className="fixtures-list">
          {fixtures.map(fixture => (
            <div key={fixture.id} className="fixture-item">
              <div className="fixture-date">{fixture.date} at {fixture.time}</div>
              <div className="fixture-match">
                <div className="team-wrapper">
                  <img src={fixture.homeLogo} alt={fixture.home} className="team-logo" />
                  <span className="team home">{fixture.home}</span>
                </div>
                <span className="vs">vs</span>
                <div className="team-wrapper">
                  <img src={fixture.awayLogo} alt={fixture.away} className="team-logo" />
                  <span className="team away">{fixture.away}</span>
                </div>
              </div>
              <div className="fixture-details">
                <span className="venue">{fixture.venue}</span>
                <span className="competition">{fixture.competition}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fixtures