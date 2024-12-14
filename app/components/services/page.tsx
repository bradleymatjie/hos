import React from 'react';
import ServiceCard from './components/service-card';
import './services.scss';
import cashIcon from '../../media/images/cash-stack.svg';
import wallet from '../../media/images/wallet.svg';
import piggy from '../../media/images/piggy-bank-fill.svg';
import book from '../../media/images/journal.svg';
import security from '../../media/images/shield-check.svg';
import tax from '../../media/images/file-earmark-check.svg';
import cipc from '../../media/images/file-earmark-spreadsheet.svg';
import statemet from '../../media/images/wallet-fill.svg';
import register from '../../media/images/r-circle.svg';
 

const ServicesSection = () => {
    const servicesData = [
        {
          icon: wallet,
          title: 'Business Consulting',
          description: 'Strategic guidance to optimize operations and drive business growth.',
        },
        {
          icon: cashIcon,
          title: 'PayRoll Services',
          description: 'Efficient and compliant PayRoll management.',
        },
        {
          icon: piggy,
          title: 'Financial Planning',
          description: 'Customized plans to secure your financial future.',
        },
        {
          icon: book,
          title: 'Bookkeeping & Accounting',
          description: 'Accurate and transparent financial records.',
        },
        {
          icon: security,
          title: 'Audit & Assurance',
          description: 'Comprehensive reviews to ensure compliance and efficiency.',
        },
        {
          icon: tax,
          title: 'Tax Preparation & Filing',
          description: 'Hassle-free tax solutions tailored to your needs.',
        },
        {
          icon: cipc,
          title: 'CIPC Services',
          description: 'Expert company registration and compliance support.',
        },
        {
          icon: statemet,
          title: 'Financial Statements',
          description: 'Clear, compliant reporting for informed decision-making.',
        },
        {
          icon: register,
          title: 'Company Registration',
          description: 'Seamless setup for your new business ventures.',
        },
      ];
      

  return (
    <section className="services-section min-h-screen flex justify-center items-center" data-aos="fade-down">
        <h2>Our Services</h2>
      <div className="card" data-aos="flip-left">
            <div>
                Driving Growth Through<br/> Accounting solutions
            </div>
            <div>
                12 years <br/>
                <span>in accounting service</span>
            </div>
      </div>
      <div className="service-cards">
        {servicesData.map((service:any, index:number) => (
          <ServiceCard key={index}   
          icon={service.icon}
          title={service.title}
          description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;