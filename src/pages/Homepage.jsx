import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          Travel the world.
          <br />
          DamirliWise keeps track of your adventures.
        </h1>
        <h2>
          A global map documenting each city you've explored a perpetual record
          of your incredible journeys. Relive cherished memories and showcase to
          your friends the extensive tapestry of your worldly adventures.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
