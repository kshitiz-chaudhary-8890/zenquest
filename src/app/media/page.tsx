import { ArrowUpRight } from "lucide-react";
export const metadata = { title: "In the Media" };
const links = [
  [
    "Rediff",
    "Tips to be careful on a dating app",
    "https://www.rediff.com/getahead/report/tips-to-be-careful-on-a-dating-app/20221116.htm",
  ],
  [
    "LBB",
    "An interview with Pooja Khera",
    "https://lbb.in/mumbai/interview-with-pooja-khera-on-81bb67",
  ],
  [
    "Vogue India",
    "Beauty and wellness resolutions",
    "https://www.vogue.in/beauty/content/5-common-beauty-and-wellness-new-years-resolutions-that-dont-work-and-what-to-make-instead",
  ],
  [
    "The Times of India",
    "Keeping social media toxicity at bay",
    "https://timesofindia.indiatimes.com/life-style/health-fitness/wellness/heres-how-to-keep-social-media-toxicity-at-bay/articleshow/86452460.cms",
  ],
];
export default function Media() {
  return (
    <section className="section page-intro">
      <h1>
        Perspectives, <br />
        <em>shared further.</em>
      </h1>
      <p>
        Selected original media links from Pooja’s website. Final selection and
        permission to display publication logos await client approval.
      </p>
      <div className="media-links">
        {links.map(([publisher, title, url]) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer">
            <span>
              <span className="media-publisher">{publisher}</span>
              <span className="media-title">{title}</span>
            </span>{" "}
            <ArrowUpRight size={15} className="inline" />
          </a>
        ))}
      </div>
    </section>
  );
}
