import { useState } from 'react';
import { useRouter } from 'next/router';
import EnrollmentModal from '../../components/EnrollmentModal';
import NavBar from '../../components/NavBar';

function Course({ course }) {
  const router = useRouter();
  const { id } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // If course data is not loaded yet
  if (!course) {
    return <div className="container mx-auto text-center mt-20">Loading...</div>;
  }

  // Handle enrollment
  const handleEnroll = (name, phone) => {
    // Add your enrollment logic here, like sending data to a server
    console.log(`Enrolling ${name} with phone number ${phone} to course ${course.title}`);
  };

  return (
    <div>
      <NavBar/>
    <div className="container mx-auto mt-10">
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-6">{course.description}</p>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700">
          <span className="text-lg font-semibold">Duration:</span> 
          <span className="text-black font-bold ml-1">{course.duration}</span>
        </p>
        <p className="text-gray-700">
          <span className="text-lg font-semibold">Price:</span> 
          <span className="text-black font-bold ml-1">₹{course.price}</span> 
          {course.discount && <del className="text-gray-400 ml-1">₹{course.discount}</del>}
        </p>
      </div>
  
      <p className="text-gray-700 mb-6">
        <strong>Syllabus:</strong> 
        {/* Use course.link as the href attribute */}
        <a href={course.link} className="text-blue-500 hover:underline">View Syllabus</a>
      </p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
      >
        Enroll
      </button>
    </div>
    {isModalOpen && (
      <EnrollmentModal
        onClose={() => setIsModalOpen(false)}
        onEnroll={handleEnroll}
        courseId={id}
      />
    )}
  </div>
  </div>
  );  
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  // Define course details based on the ID
  let course = null;

  if (id === '1') {
    course = {
      id: '1',
      title: 'Basic',
      description: 'Embark on a transformative journey into the digital realm with our exclusive Basic Course, meticulously designed to equip you with essential skills and knowledge crucial for thriving in todays digital landscape. From mastering Computer Fundamentals to harnessing the power of Microsoft Office Suite and navigating the intricacies of the internet, our comprehensive curriculum ensures you gain fluency in essential applications and digital literacy. Delve deeper into Accounting Management with Tally, explore the realms of DTP & Animation with Photoshop, CorelDRAW, and PageMaker, and unleash your creativity like never before. With our course, you are not just learning – you are investing in your future, gaining a competitive edge in the digital age and unlocking endless opportunities for growth and success. Join us today and embark on a journey towards digital excellence!',
      duration: '3-4 months',
      price: '6,000',
      discount: '8,000',
      syllabus: 'Computer Fundamentals, Windows, MS-Word, MS-Excel, MS-Power Point, Internet (Browsing, Messaging, E-mail, Chatting, Downloading, Searching), Accounting Management (Tally), Dtp & Animation (Photoshop, Corel draw, Page maker)',
      link:'https://drive.google.com/file/d/1Tqbnir47BrJ0yBp6jjPF_4vDwFahjhz6/view?usp=drive_link'
    };
  } else if (id === '2') {
    course = {
      id: '2',
      title: 'Placement Program',
      description: 'Our Placement Program is meticulously crafted to empower students with the essential skills and knowledge needed to thrive in the competitive job market. Through an extensive curriculum, participants undergo rigorous training in programming languages such as C++, Java, and Python, alongside mastering object-oriented programming principles and database management systems like MySQL. They delve into computer networking, operating systems, and data structures and algorithms, honing problem-solving abilities vital for real-world scenarios. Additionally, students gain proficiency in data analysis, analytics, and machine learning, augmented by hands-on projects that provide practical experience and build a robust portfolio. With personalized mentorship and industry-aligned learning, our Placement Program ensures that graduates are well-prepared to excel in their careers and secure coveted positions in top organizations. Our program not only equips students with technical prowess but also cultivates strong interpersonal skills, ensuring they stand out as dynamic professionals in todays competitive landscape.',
      duration: '12 months',
      price: '30,000',
      discount: '40,000',
      syllabus: 'C++/Java/Python, OOPS, DBMS, MySQL, Computer Networking, Operating Systems, Data Structure and Algorithms, DAA, Projects, System Design, AI, and Web development.',
      link:'https://drive.google.com/file/d/1xYqcNeHKYiN4Y7ViaSpEXXDjyFvGv8jX/view?usp=drive_link'
    };
  } else if (id === '3') {
    course = {
      id: '3',
      title: 'Web Development',
      description: 'Embark on a transformative journey with our cutting-edge web development course, meticulously crafted to empower aspiring developers with a comprehensive skill set that transcends conventional boundaries. Delving deep into the realms of HTML, CSS, and JavaScript, this course lays a robust foundation, paving the way for mastery in frontend and backend technologies like NodeJS, ExpressJS, and MongoDB. But it doesnt stop there. With an emphasis on advanced concepts such as VanillaJS, React, and NextJS, students delve into the intricacies of state management, authentication, and real-time communication through WebRTC. Moreover, our curriculum extends beyond mere theoretical knowledge, fostering practical expertise in essential tools like Git, Postman, and Docker, alongside invaluable insights into CI-CD pipelines and Monorepo deployments. By immersing themselves in hands-on projects and embracing open-source contributions, students not only sharpen their technical prowess but also cultivate a mindset of innovation and collaboration essential for thriving in todays dynamic tech landscape. With a focus on both breadth and depth, this course not only equips learners with the skills demanded by industry leaders but also instills in them the confidence and adaptability to tackle any challenge head-on, making it the ultimate catalyst for success in the ever-evolving world of web development.',
      duration: '6-7 month',
      price: '15,000',
      discount: '24,000',
      syllabus: 'Html, Css, JavaScript, Github, Git, NodeJS, ExpressJS, Postman, Authentication, MongoDB, Advance Concepts(Reconciler, VanillaJS), WebRTC, React, Material UI, State Management(Recoil,Redux), Projects, Advance Concepts(TypeScipt, Zod,  NextJS, Authentication with Next auth,  Monorepos, Deploying of npm Packages, CI-CD, OpenApi, Monorepo Deployment, Tailwind, SQL, Prisma ORM, Trpc, Docker, GraphQL, Open-Source Contributions) ',
      link:'https://drive.google.com/file/d/1cYUDbb-nV9RrPZG42cJbTnrtFm2ctf3y/view?usp=drive_link'
    };
  } else if (id === '4') {
    course = {
      id: '4',
      title: 'Android Development',
      description: 'Explore the exciting world of Mobile App Development (MAD) in this comprehensive course designed for beginners. Learn to create mobile applications for Android and iOS platforms using industry-standard tools and techniques. Dive into the fundamentals of app development, including user interface design, navigation, data storage, and integration of essential features such as GPS, camera, and sensors. Gain hands-on experience through practical projects and develop the skills needed to build your own mobile apps from scratch. Whether youre a budding entrepreneur, aspiring developer, or simply curious about the mobile app ecosystem, this course will equip you with the knowledge and confidence to succeed in the dynamic field of mobile app development.',
      duration:'Coming Soon',
      price: 'Coming Soon',
      discount: 'Coming Soon',
      syllabus: 'Cost of Mobile Application Development, Importance of Mobile Strategies, Challenges, Myths, Third-Party Frameworks, Mobile Web Presence, Applications Factors in Developing Mobile Applications, Mobile Software Engineering, Frameworks and Tools, Generic UI Development, Android User, Introduction to Mobility, Mobility Landscape, Mobile Platforms, Mobile apps development, Overview of Android Platform, Setting up the mobile apps development environment with emulator, Telephony, Deciding Scope of an App, Wireless Connectivity and Mobile Apps, Android Telephony, Building block of Mobile apps, App user Interface Designing, Layout, Widgets, User Interface elements, Draw-able, Menu, Activity states and lifecycle, Interaction among activities, App functionality-based user interface, Threads, Asynchronous task, Services-states and lifecycle, Notifications, Broadcast receivers, Telephony and SMS API.',
      link:'https://drive.google.com/file/d/1JAUkbslyj-OoEzkDpAhA7CuZI_tfKw4c/view?usp=sharing'
    };
  } else if (id === '5') {
    course = {
      id: '5',
      title: 'Cloud Computing',
      description: 'Cloud computing is a revolutionary paradigm that offers scalable and on-demand access to computing resources over the internet. Studying cloud computing provides individuals with the knowledge and skills necessary to leverage this technology for various purposes, such as deploying applications, storing and managing data, and optimizing IT infrastructure. Understanding cloud computing enables individuals to stay at the forefront of modern technology trends, enhance their career prospects by acquiring sought-after skills, and unlock opportunities for innovation and efficiency in organizations across diverse industries.',
      duration: '6-7 month',
      price: '15,000',
      discount: '24,000',
      syllabus: 'Get Started with Linux, Access the Command line, Manage files from the command line, Get help in Linux, Create, view and edit text files, Manage local users and groups, Control access list, Monitor and manage Linux processes, Control services and daemons, Manage Networking, IAM & AWS CLI, EC2 Fundamentals & Associate Level, Cloudwatch, High Availability Load Balancer, Route 53 (DNS), Storage S3 Bucket, Networking – VPC, Cloud Front & Global Accelerator, Source Code Management Git, CI/CD Jenkins – Continous Integration and Deployment, Package Mangement Docker, Container Orchestration- Kubernetes, Infrastructure as a Code – Terraform.',
      link:'https://drive.google.com/file/d/1MEAoRGEcataGEqK85SzczPGKEpeDmbXB/view?usp=sharing'
    };
  } else if (id === '6') {
    course = {
      id: '6',
      title: 'Artificial Intelligence and Machine learning',
      description: 'Studying AIML (Artificial Intelligence Markup Language) is crucial for individuals aiming to grasp natural language processing concepts and build AI-driven solutions like chatbots and virtual assistants. With AIML skills, one can unlock career prospects in software development, data science, and machine learning, meeting the escalating demand in diverse industries. Moreover, mastering AIML empowers individuals to innovate and contribute to the evolution of AI technology, fostering advancements across sectors such as healthcare, finance, and education.',
      duration: 'Coming Soon',
      price: 'Coming Soon',
      discount: 'Coming Soon',
      syllabus: 'Introduction to AI and ML, Machine learning types, Mathematical foundations, Linear algebra, Probability and statistics, Machine learning algorithms, Supervised learning, Linear regression, Logistic regression, Decision trees, Support Vector Machine, K-nearest Neighbours(K-NN), Neural networks deep learning, Unsupervised learning, Clustering algorithm, Dimensionality reduction techniques, Reinforcement learning, Markov Decision Processes (MDP), Q-learning, Deep Q Network (DQN), Deep learning, Convolutional Neural Network, Recurrent Neural Network, Transfer algorithm, Evolution and validation, Cross validation, Bias-variance validation, Overfitting and underfitting, Feature Engineering and selection, Feature selection and normalization, Feature selection techniques.',
      link:'https://drive.google.com/file/d/1CzLdP3Zi52CbNkUTQMdywrK9n5n400_w/view?usp=sharing'
    };
  }

  return {
    props: {
      course,
    },
  };
}

export default Course;
