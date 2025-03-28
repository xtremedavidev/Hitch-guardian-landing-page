import React from 'react';

const Solution = () => {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>The HitchGuardian Solution</h2>
          <p>Tailored solutions for every level of your organization</p>
        </div>
        {/* Dashboard Screenshot */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 3rem', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.15)' }} className="animate-on-scroll">
          <img src="/images/Dashboard and app screenshot.png" alt="HitchGuardian Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} onError={(e) => e.target.style.display = 'none'} />
        </div>
        <div className="solution-grid">
          <div className="solution-card animate-on-scroll">
            <div className="card-inner">
              <div className="solution-front">
                <div className="solution-header">
                  <h3>For the Worker</h3>
                </div>
                <div className="solution-image" style={{ backgroundImage: 'url("/api/placeholder/400/200?text=Field+Worker")' }}></div>
                <div className="solution-body">
                  <p>Real-time updates and clear instructions</p>
                </div>
              </div>
              <div className="solution-back">
                <h3>For the Field Worker</h3>
                <p>Real-time job assignments and safety alerts delivered directly to mobile devices. No more waiting for dispatch calls or juggling outdated tools. HitchGuardian ensures oilfield workers always know their exact schedule, location, and task requirements—enhancing productivity and safety compliance.</p>
              </div>
            </div>
          </div>
          
          <div className="solution-card animate-on-scroll">
            <div className="card-inner">
              <div className="solution-front">
                <div className="solution-header">
                  <h3>For Operations Teams</h3>
                </div>
                <div className="solution-image" style={{ backgroundImage: 'url("/api/placeholder/400/200?text=Operations+Teams")' }}></div>
                <div className="solution-body">
                  <p>Automated scheduling and tracking</p>
                </div>
              </div>
              <div className="solution-back">
                <h3>For Operations Teams</h3>
                <p>Eliminate scheduling bottlenecks with automatic crew matching and GPS journey tracking. HitchGuardian's automated dispatch system assigns qualified personnel to tasks based on certifications, proximity, and availability—reducing administrative workload by 70% and ensuring complete shift coverage.</p>
              </div>
            </div>
          </div>
          
          <div className="solution-card animate-on-scroll">
            <div className="card-inner">
              <div className="solution-front">
                <div className="solution-header">
                  <h3>For the Business Owner</h3>
                </div>
                <div className="solution-image" style={{ backgroundImage: 'url("/api/placeholder/400/200?text=Business+Owner")' }}></div>
                <div className="solution-body">
                  <p>Lower costs and secure contracts</p>
                </div>
              </div>
              <div className="solution-back">
                <h3>For the Business Owner</h3>
                <p>Maximize ROI and secure contracts with Western Canada's premier oilfield crew management solution. HitchGuardian decreases operational costs while mitigating compliance risks through automated scheduling, real-time KPI dashboards, and comprehensive safety management—giving you the competitive edge.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;