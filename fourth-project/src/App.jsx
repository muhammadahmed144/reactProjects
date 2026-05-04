import React from "react";
import "./index.css";
import User from "./Components/User";
import Card from "./Components/Card";

const App = () => {
  const jobs = [
    {
      id: 1,
      company: "Google",
      brandLogo:
        "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
      date: "2026-05-01",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "React",
      tag2: "UI Engineering",
      jobType: "Full Time",
      level: "Senior",
      payPerHour: "$80/hr",
      location: "Remote / Karachi, Pakistan",
    },
    {
      id: 2,
      company: "Microsoft",
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fBOV3JAx59PZvBhf8ik4RucfpM1pNHFj3A&s",
      date: "2026-04-28",
      datePosted: "5 days ago",
      post: "Backend Engineer",
      tag1: "Node.js",
      tag2: "APIs",
      jobType: "Full Time",
      level: "Junior",
      payPerHour: "$45/hr",
      location: "Karachi, Pakistan",
    },
    {
      id: 3,
      company: "Amazon",
      brandLogo:
        "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      date: "2026-04-25",
      datePosted: "8 days ago",
      post: "Cloud Engineer",
      tag1: "AWS",
      tag2: "DevOps",
      jobType: "Full Time",
      level: "Senior",
      payPerHour: "$90/hr",
      location: "Remote",
    },
    {
      id: 4,
      company: "Meta",
      brandLogo:
        "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
      date: "2026-04-22",
      datePosted: "11 days ago",
      post: "UI/UX Engineer",
      tag1: "Design",
      tag2: "Frontend",
      jobType: "Full Time",
      level: "Mid",
      payPerHour: "$70/hr",
      location: "Karachi, Pakistan",
    },
    {
      id: 5,
      company: "Netflix",
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
      date: "2026-04-20",
      datePosted: "13 days ago",
      post: "Backend Engineer",
      tag1: "Microservices",
      tag2: "System Design",
      jobType: "Full Time",
      level: "Senior",
      payPerHour: "$95/hr",
      location: "Remote",
    },
    {
      id: 6,
      company: "Apple",
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTs3WgzCPaAGPn7XEEIenK7kxxvzH6vxJew&s",
      date: "2026-04-18",
      datePosted: "15 days ago",
      post: "iOS Developer",
      tag1: "Swift",
      tag2: "Mobile Apps",
      jobType: "Full Time",
      level: "Junior",
      payPerHour: "$50/hr",
      location: "Karachi, Pakistan",
    },
    {
      id: 7,
      company: "Tesla",
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1280px-Tesla_logo.png",
      date: "2026-04-15",
      datePosted: "18 days ago",
      post: "AI Engineer",
      tag1: "Machine Learning",
      tag2: "Python",
      jobType: "Full Time",
      level: "Senior",
      payPerHour: "$100/hr",
      location: "Remote",
    },
    {
      id: 8,
      company: "Stripe",
      brandLogo:
        "https://logos-world.net/wp-content/uploads/2022/12/Stripe-Emblem.png",
      date: "2026-04-12",
      datePosted: "21 days ago",
      post: "Fintech Developer",
      tag1: "Payments",
      tag2: "Backend",
      jobType: "Part Time",
      level: "Mid",
      payPerHour: "$60/hr",
      location: "Remote / Karachi, Pakistan",
    },
    {
      id: 9,
      company: "Uber",
      brandLogo:
        "https://static.vecteezy.com/system/resources/thumbnails/050/816/820/small/uber-transparent-icon-free-png.png",
      date: "2026-04-10",
      datePosted: "23 days ago",
      post: "React Native Developer",
      tag1: "Mobile",
      tag2: "Cross Platform",
      jobType: "Full Time",
      level: "Junior",
      payPerHour: "$40/hr",
      location: "Karachi, Pakistan",
    },
    {
      id: 10,
      company: "Adobe",
      brandLogo:
        "https://logowik.com/content/uploads/images/adobe-inc-a878.logowik.com.webp",
      date: "2026-04-05",
      datePosted: "28 days ago",
      post: "Frontend Designer",
      tag1: "CSS",
      tag2: "UI Systems",
      jobType: "Part Time",
      level: "Mid",
      payPerHour: "$55/hr",
      location: "Remote",
    },
  ];

  console.log(jobs);

  return (
    <div className="parent">
      {jobs.map((elem, id) => {
        return (
          <div key={elem.id}>
            <Card
            company={elem.company}
            brandLogo={elem.brandLogo}
            datePosted={elem.datePosted}
            post={elem.post}
            jobType={elem.jobType}
            level={elem.level}
            payPerHour={elem.payPerHour}
            location={elem.location}
            />
            </div>
        );
      })}
    </div>
  );
};

export default App;
