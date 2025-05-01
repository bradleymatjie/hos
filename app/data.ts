import { Monitor, Palette, BarChart, ShoppingCart, Smartphone, Layers, Cloud, Camera } from "lucide-react";

export const servicesList = [
    {
      title: "Web Design",
      description: "Modern, responsive websites that convert visitors into clients.",
      icon: Monitor,
    },
    {
      title: "Brand Identity",
      description: "Logo design, colors, fonts — everything to make you unforgettable.",
      icon: Palette,
    },
    {
      title: "Digital Marketing",
      description: "SEO, content creation, and strategies that drive growth.",
      icon: BarChart,
    },
    {
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce websites to boost your online sales.",
      icon: ShoppingCart,
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform apps for seamless user experiences.",
      icon: Smartphone,
    },
    {
      title: "UI/UX Design",
      description: "Crafting user-centered designs for better engagement and retention.",
      icon: Layers,
    },
    {
      title: "Cloud Services",
      description: "Cloud hosting and data management for scalability and security.",
      icon: Cloud,
    },
    {
      title: "Content Creation",
      description: "Videos, blogs, and visuals to elevate your brand presence.",
      icon: Camera,
    },
  ];

export const testimonialsArray =
    [
        {
            name: 'Skhulile Kunene',
            company: 'Kunene Properties',
            image: '/hero.jpg',
            testimonial: 'So amazing, i love every thought and attention to detail they put in their work',
        },
        {
            name: 'Jane Doe',
            company: 'Creative Inc',
            image: '/sfiso.jpg',
            testimonial: 'This service changed my life! Highly recommend to everyone!',
        },
        {
            name: 'John Smith',
            company: 'Innovatech',
            image: '/card-image.jpg',
            testimonial: 'Absolutely wonderful experience working with the team!',
        },
        {
            name: 'Sarah Johnson',
            company: 'Bright Ideas',
            image: '/hos-logo.png',
            testimonial: 'Professional, reliable, and creative — highly recommend!',
        },
        {
            name: 'Mike Brown',
            company: 'NextGen Solutions',
            image: '/sfiso.jpg',
            testimonial: 'They really understood our vision and brought it to life.',
        },
    ];

    export const projectsData:ProjectsDataType = {
      projects: {
        title: 'Our Projects',
        description: 'A selection of our most impactful and creative work, crafted for clients who value excellence.',
        list: [
          {
            title: 'Brand Identity for Saint Co.',
            description: 'Logo, typography, and brand kit for a luxury fashion brand.',
            image: '/hero.jpg',
          },
          {
            title: 'The Luxe Gala Event',
            description: 'Visual design for a luxury corporate gala.',
            image: '/hero.jpg',
          },
        ],
      },
      clients: {
        title: 'Clients',
        description: 'Some of the brands and businesses we’ve had the pleasure to work with.',
        list: [
          {
            title: 'Saint Co.',
            description: 'Logo design and visual branding.',
            image: '/hero.jpg',
          },
          {
            title: 'LuxeWear',
            description: 'Rebrand and new mark.',
            image: '/hero.jpg',
          },
        ],
      },
      graphics: {
        title: 'Graphic Design',
        description: 'Posters, social media visuals, and design experiments.',
        list: [
          {
            title: 'Night Vibes Poster',
            description: 'A vibrant club event poster.',
            image: '/hero.jpg',
          },
          {
            title: 'Fashion Week Poster',
            description: 'Poster design for a fashion showcase.',
            image: '/hero.jpg',
          },
        ],
      },
      branding: {
        title: 'Branding',
        description: 'Crafting identities with purpose and precision.',
        list: [
          {
            title: 'Saint Skin',
            description: 'Packaging & visual system design.',
            image: '/hero.jpg',
          },
        ],
      },
    };
    


    type ProjectItem = {
      title: string;
      description: string;
      image: string;
    };
    
    type ProjectCategory = {
      title: string;
      description: string;
      list: ProjectItem[];
    };
    
    export type ProjectsDataType = {
      projects: ProjectCategory;
      clients: ProjectCategory;
      graphics: ProjectCategory;
      branding: ProjectCategory;
    };

    export type ProjectTabKey = keyof ProjectsDataType;
    