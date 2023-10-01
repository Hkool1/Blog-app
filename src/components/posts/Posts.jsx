import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
      <Post img="https://media.istockphoto.com/id/1410656746/photo/digital-football-stadium-view-illuminated-by-blue-spotlights-and-empty-green-grass-field.jpg?s=1024x1024&w=is&k=20&c=bqJqsUJpRkQT421rp0zkUx3SYip8e3F5Vq_AeL2sLRw=" />
      <Post img="https://media.istockphoto.com/id/1463226706/photo/orange-basketball-ball-on-hardwood-court-floor-horizontal-sport-theme-poster-greeting-cards.jpg?s=1024x1024&w=is&k=20&c=w-N9N7HRpbsrHEINo4CAPQvppFaAo3BZqGF_Iwyfc7U=" />
      <Post img="https://media.istockphoto.com/id/1483860812/photo/closeup-of-sunflower-in-sunflower-field-blue-sky-in-the-background-spring-flowers-theme.jpg?s=1024x1024&w=is&k=20&c=McKw07fpoiTsaa1a5d_rm7Dsdy-Z2K5ugnAaSInpEpE=" />
      <Post img="https://media.istockphoto.com/id/1460755337/photo/white-color-theme-modern-style-office-with-exposed-concrete-floor-and-a-lot-of-plant-3d.jpg?s=1024x1024&w=is&k=20&c=-G_7gtguYmk3uuYxxfBfCTbL0wulw0izJnUs6gW6iwE=" />
    </div>
  )
}