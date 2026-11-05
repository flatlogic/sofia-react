import profileAsset0 from '../../assets/profile/timeline/lesson1.svg';
import profileAsset1 from '../../assets/profile/timeline/lesson2.svg';
import profileAsset2 from '../../assets/profile/timeline/lesson3.svg';
import profileAsset3 from '../../assets/profile/timeline/lesson4.svg';
import profileAsset4 from '../../assets/profile/timeline/lesson5.svg';
import profileAsset5 from '../../assets/profile/timeline/lesson6.svg';
import profileAsset6 from '../../assets/profile/news/bbcnewsLogo.svg';
import profileAsset7 from '../../assets/profile/news/cnnLogo.svg';
import profileAsset8 from '../../assets/profile/news/euronewsLogo.svg';
import profileAsset9 from '../../assets/profile/news/nbcLogo.svg';
import profileAsset10 from '../../assets/profile/AlishaSwan.png';
import profileAsset11 from '../../assets/profile/JamesWood.png';
import profileAsset12 from '../../assets/profile/LuisSuares.png';
import profileAsset13 from '../../assets/profile/SamanthaBird.png';
import profileAsset14 from '../../assets/profile/TaraSmith.png';
import profileAsset15 from '../../assets/profile/BrandyMartins.png';
import profileAsset16 from '../../assets/profile/EnzoMacaroni.png';
import profileAsset17 from '../../assets/profile/JennyLim.png';
export default {
  timelineWidget: {
    timelineData: [
      {
        img: profileAsset0,
        title: "Lesson 1",
        label: "Self introduction"
      },
      {
        img: profileAsset1,
        title: "Lesson 2",
        label: "Dialog at school"
      },
      {
        img: profileAsset2,
        title: "Lesson 3",
        label: "Daily conversation"
      },
      {
        img: profileAsset3,
        title: "Lesson 4",
        label: "Listening"
      },
      {
        img: profileAsset4,
        title: "Quiz",
        label: "First week quiz"
      },
      {
        img: profileAsset5,
        title: "Assignment",
        label: "First week assignment"
      },
    ],
    timelineSteps: [
      {
        cardSubtitle: "",
        cardDetailedText: "",
      },
      {
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
      },
      {
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
      },
      {
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
      },
      {
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
      },
      {
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
      },
    ],
  },
  newsGroupData: [
    {
      title:"BBC News",
      time:"15 min ago",
      img: profileAsset6,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys typesetting industry.',
    },
    {
      title:"Euronews",
      time:"1 h ago",
      img: profileAsset7,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys typesetting industry.',
    },
    {
      title:"CNN",
      time:"3 h ago",
      img: profileAsset8,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys typesetting industry.',
    },
    {
      title:"NBC",
      time:"6 h ago",
      img: profileAsset9,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys typesetting industry.',
    },
  ],

  avatarGroupData: [
    {
      title: 'Alisha Swan',
      img: profileAsset10,
    },
    {
      title: 'James Wood',
      img: profileAsset11,
    },
    {
      title: 'Luis Suares',
      img: profileAsset12,
    },
    {
      title: 'Samantha Bird',
      img: profileAsset13,
    },
    {
      title: 'Tara Smith',
      img: profileAsset14,
    },
    {
      title: 'Brandy Martins',
      img: profileAsset15,
    },
    {
      title: 'Enzo Macaroni',
      img: profileAsset16,
    },
    {
      title: 'Jenny Lim',
      img: profileAsset17,
    },
  ],
  apexLineChart: {
    series: [
      {
        name: "Products",
        data: [30, 41, 35, 51, 49, 62, 69, 91, 100]
      },
      {
        name: "Services",
        data: [64, 53, 47, 39, 24, 36, 42, 55, 67]
      }
    ],
    options: {
      chart: {
        toolbar: false,
        zoom: {
          enabled: false
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      grid: {
        show: false,
        row: {
          colors: ['transparent'],
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          style: {
            colors: "#6B859E",
          },
        },
      },
      yaxis: {
        tickAmount: 3,
        labels: {
          style: {
            colors: "#6B859E",
          },
        },
      },
      colors: ['#4d53e0', '#41D5E2']
    }
  }
}
