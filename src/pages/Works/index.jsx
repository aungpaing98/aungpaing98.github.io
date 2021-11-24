import Experiences from "../../components/Experiences";
import Work from "../../components/Work";

export default function index() {
  const projects = [
    { id: 0, img: "project1.jpg", description: "Automatic Lane Detection" },
    { id: 1, img: "project2.jpg", description: "Automatic Lane Detection" },
    { id: 2, img: "project3.jpg", description: "Automatic Lane Detection" },
    { id: 3, img: "project4.jpg", description: "Automatic Lane Detection" },
  ];
  const experiences = [
    {
      id: "e1",
      startDate: "2021-01",
      endDate: "2021-05",
      title: "Junior Machine Learning Engineer",
      company: "Omdena Global",
      description: [
        "Participate as one of the collaborators of 55 members form 22 countries.",
        "Built a Natural Language Processing models to perform scoring for news, articles, websites and news.",
      ],
    },
    {
      id: "e2",
      startDate: "2020-10-",
      endDate: "2021-01",
      title: "Teaching Assistant",
      company:
        "Computer Vision and Machine Learning Lab, Yangon Technological University",
      description: [
        "Created Lesson Materials, visuals and digital presentations to supplement lesson plans.",
        "Assisted teachers with classroom management and document coordination to maintain positive learning environment.",
      ],
    },
    {
      id: "e3",
      startDate: "2019-12-",
      endDate: "2020-02",
      title: "Machine Learning Internship",
      company: "Acroquest Myanmar Technology, Yangon",
      description: [
        "Trained Machine Learning models for both supervised and unsupervised dataset with up to production level performance.",
        "Re-implement and trained Image Classification and Segmentation models from company’s client real world problem.",
      ],
    },
  ];
  return (
    <>
      <Work projects={projects} />
      <Experiences experiences={experiences} />
    </>
  );
}
