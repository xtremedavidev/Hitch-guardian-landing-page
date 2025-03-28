'use client'
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Different from '@/components/Different';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WaveAnimation from '@/components/WaveAnimation';
import './HitchGuardianLanding.css';

const HitchGuardianLanding = () => {
  useEffect(() => {
    // Animation on scroll logic
    const checkIfInView = () => {
      const windowHeight = window.innerHeight;
      const windowTopPosition = window.scrollY;
      const windowBottomPosition = windowTopPosition + windowHeight;
      
      // Handle fade-in animations
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        const elementHeight = element.offsetHeight;
        const elementTopPosition = element.offsetTop;
        const elementBottomPosition = elementTopPosition + elementHeight;
        
        // Check if element is in view
        if (
          elementBottomPosition >= windowTopPosition &&
          elementTopPosition <= windowBottomPosition
        ) {
          element.classList.add('visible');
        }
      });
      
      // Handle solution card animations
      document.querySelectorAll('.solution-card').forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardTopPosition = cardRect.top;
        
        // Check if card is in view
        if (cardTopPosition < windowHeight * 0.75) {
          card.classList.add('visible');
        }
      });
      
      // Challenge box animation
      const challengeBox = document.querySelector('.challenge-box');
      if (challengeBox) {
        const boxRect = challengeBox.getBoundingClientRect();
        if (boxRect.top < windowHeight * 0.8) {
          challengeBox.classList.add('visible');
        }
      }
      
      // Different section animation
      const differentContent = document.querySelector('.different-content');
      if (differentContent) {
        const contentRect = differentContent.getBoundingClientRect();
        if (contentRect.top < windowHeight * 0.8) {
          differentContent.classList.add('visible');
        }
      }
      
      // Feature items animation
      document.querySelectorAll('.feature-item').forEach(item => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top < windowHeight * 0.85) {
          item.classList.add('visible');
        }
      });
    };
    
    // Add delay for cascade effect on solution cards
    document.querySelectorAll('.solution-card').forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.15}s`;
    });
    
    // Check on load
    checkIfInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', checkIfInView);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className='bg-white'>
      <WaveAnimation />
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Different />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default HitchGuardianLanding;