import { useState } from 'react'
import barca from './assets/barca.png'
import './App.css'

function News() {
  const [selectedArticle, setSelectedArticle] = useState(null)

  const newsArticles = [
    {
        
      id: 1,
      title: "Premier FC Secures Thrilling Victory in Championship Final",
      date: "April 20, 2026",
      category: "Match Report",
      image:barca,
      content: "In a nail-biting match that went into extra time, Premier FC clinched the championship title with a stunning 3-2 win over rivals City United. Captain Alex Johnson scored the winning goal in the 95th minute, sending fans into ecstasy. Coach Maria Rodriguez praised the team's resilience and dedication throughout the season.\n\nThe match was a rollercoaster of emotions from start to finish. City United took an early lead in the 15th minute, but Premier FC equalized just before halftime through a stunning strike from midfielder David Chen. The second half saw both teams trading goals, with the scoreboard reading 2-2 as the clock ticked down to 90 minutes.\n\nIn stoppage time, captain Alex Johnson received the ball on the edge of the box, took a touch, and unleashed a powerful shot that found the top corner. The stadium erupted as the final whistle confirmed Premier FC as champions.\n\nThis victory marks the club's 15th league title and completes a remarkable season where they overcame a 10-point deficit in the second half of the campaign.",
      summary: "In a nail-biting match that went into extra time, Premier FC clinched the championship title with a stunning 3-2 win over rivals City United."
    },
    {
      id: 2,
      title: "Star Striker Signs New Contract Extension",
      date: "April 15, 2026",
      category: "Transfer News",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop",
      content: "Premier FC is delighted to announce that top scorer Jamie Williams has signed a three-year contract extension, keeping him at the club until 2029. Williams, who has netted 25 goals this season, expressed his commitment to the club's ambitious plans.\n\n'I'm excited to continue my journey here and help bring more trophies to the fans,' Williams said in a press conference. 'This club has become my home, and I want to be part of something special. The project here is incredible, and I believe we can achieve great things together.'\n\nThe 26-year-old striker joined Premier FC from Valley Rovers in 2023 and has since become one of the most prolific forwards in the league. His 25 goals this season have broken the club's single-season scoring record.\n\nClub CEO Sarah Patel commented: 'Jamie is an exceptional talent and a true professional. Keeping him at the club was our top priority, and we're thrilled to have secured his services for the long term.'",
      summary: "Premier FC is delighted to announce that top scorer Jamie Williams has signed a three-year contract extension, keeping him at the club until 2029."
    },
    {
      id: 3,
      title: "Youth Academy Produces New Talent",
      date: "April 10, 2026",
      category: "Academy",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=400&fit=crop",
      content: "The club's youth academy continues to shine with 18-year-old midfielder Taylor Brown making his first-team debut. Brown impressed in his cameo appearance, showcasing the quality of our development program.\n\nComing on in the 75th minute against United Athletic, Brown showed composure beyond his years, completing 95% of his passes and creating two clear-cut chances. His performance has earned praise from fans and pundits alike.\n\nAcademy Director Mark Thompson stated: 'This is just the beginning for Taylor and many other talented young players in our system. We've invested heavily in our academy facilities and coaching staff, and it's rewarding to see young talent progress to the first team.'\n\nBrown is the fifth academy graduate to make their first-team debut this season, highlighting the club's commitment to developing homegrown talent. Several other promising players are reportedly close to breaking into the senior squad.",
      summary: "The club's youth academy continues to shine with 18-year-old midfielder Taylor Brown making his first-team debut."
    },
    {
      id: 4,
      title: "Club Announces Community Outreach Program",
      date: "April 5, 2026",
      category: "Community",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=400&fit=crop",
      content: "Premier FC has launched a new community initiative aimed at promoting football among underprivileged youth. The program includes free coaching sessions, equipment donations, and school visits.\n\nThe 'Football for All' program will provide weekly training sessions at local schools in underprivileged areas, with qualified coaches from the club's academy staff. Equipment including boots, balls, and kits will be provided free of charge to participants.\n\nCEO Sarah Patel emphasized the club's commitment to giving back: 'Football has the power to change lives, and we're proud to extend that opportunity to our local community. This program is about more than just teaching football – it's about giving young people confidence, discipline, and opportunities they might not otherwise have.'\n\nThe initiative will also partner with local charities to provide educational support and mentorship programs. The club has committed £500,000 annually to fund the program, which is expected to benefit over 2,000 young people in its first year.",
      summary: "Premier FC has launched a new community initiative aimed at promoting football among underprivileged youth."
    },
    {
      id: 5,
      title: "Manager Contract Renewal",
      date: "April 1, 2026",
      category: "Club News",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=400&fit=crop",
      content: "Premier FC is pleased to announce that Manager Maria Rodriguez has signed a new four-year contract, extending her stay at the club until 2030.\n\nRodriguez took over as manager in 2022 and has transformed the team's fortunes, leading them to two league titles and one cup victory. Her tactical acumen and man-management skills have earned widespread praise throughout the football community.\n\n'I believe in this project and the vision we have for the club,' Rodriguez said. 'We have an amazing group of players, a fantastic support team, and the best fans in the world. I want to continue building something special here.'\n\nThe contract extension represents a significant vote of confidence in Rodriguez's leadership and sets the foundation for sustained success in the years ahead.",
      summary: "Premier FC is pleased to announce that Manager Maria Rodriguez has signed a new four-year contract, extending her stay at the club until 2030."
    },
    {
      id: 6,
      title: "Stadium Expansion Plans Unveiled",
      date: "March 28, 2026",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=400&fit=crop",
      content: "Premier FC has unveiled ambitious plans to expand Premier Stadium from its current capacity of 50,000 to 75,000, making it one of the largest venues in the country.\n\nThe £200 million project will include the construction of a new stand behind the north goal, additional hospitality suites, and state-of-the-art fan facilities. Construction is expected to begin in summer 2026 and complete by the 2028-29 season.\n\nCEO Sarah Patel commented: 'This expansion will allow more fans to experience the magic of match days at Premier Stadium. We've listened to our supporters and worked to create a stadium that meets their expectations while maintaining the intimate atmosphere that makes our home special.'\n\nThe plans also include improved transport links, with a new railway station planned to ease match-day congestion. Environmental sustainability measures will be incorporated, with the stadium targeting BREEAM excellent certification.",
      summary: "Premier FC has unveiled ambitious plans to expand Premier Stadium from its current capacity of 50,000 to 75,000."
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <h2>Latest News</h2>
        
        {selectedArticle ? (
          <div className="news-detail">
            <button className="back-btn" onClick={() => setSelectedArticle(null)}>
              ← Back to News
            </button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="news-detail-image" />
            <div className="news-detail-content">
              <span className="news-category">{selectedArticle.category}</span>
              <h3>{selectedArticle.title}</h3>
              <p className="article-date">{selectedArticle.date}</p>
              <div className="news-body">
                {selectedArticle.content.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="news-grid">
            {newsArticles.map(article => (
              <article 
                key={article.id} 
                className="news-card"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="news-image-wrapper">
                  <img src={article.image} alt={article.title} />
                  <span className="news-category">{article.category}</span>
                </div>
                <div className="news-content">
                  <h3>{article.title}</h3>
                  <p className="article-date">{article.date}</p>
                  <p className="news-summary">{article.summary}</p>
                  <span className="read-more">Read more →</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default News