import './App.css'

function Home() {
  const featuredNews = [
    {
      title: "Championship Victory!",
      summary: "Premier FC wins the league title in dramatic fashion."
    },
    {
      title: "New Signing Alert",
      summary: "Star midfielder joins the squad for the next season."
    }
  ];

  const upcomingMatch = {
    opponent: "Rival United",
    date: "May 1, 2026",
    time: "15:00",
    venue: "Premier Stadium"
  };

  return (
    <div className="page">
      <section className="hero">
        <h2>Welcome to Premier Football Club</h2>
        <p>Experience the passion, the glory, and the unbreakable spirit of Premier FC. Your team, your pride.</p>
      </section>
      
      <section className="upcoming-match">
        <div className="container">
          <h2>Next Match</h2>
          <div className="match-card">
            <h3>Premier FC vs {upcomingMatch.opponent}</h3>
            <p>{upcomingMatch.date} at {upcomingMatch.time}</p>
            <p>{upcomingMatch.venue}</p>
          </div>
        </div>
      </section>
      
      <section className="featured-news">
        <div className="container">
          <h2>Featured News</h2>
          <div className="news-grid">
            {featuredNews.map((news, index) => (
              <div key={index} className="news-item">
                <h3>{news.title}</h3>
                <p>{news.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="club-info">
        <div className="container">
          <h2>About Premier FC</h2>
          <p>Founded in 1900, Premier Football Club has been a cornerstone of football excellence for over a century. With a rich history of triumphs and a passionate fanbase, we continue to strive for greatness on and off the pitch.</p>
        </div>
      </section>
    </div>
  );
}

export default Home