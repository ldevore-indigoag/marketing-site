import React, { useState } from 'react';
import { Button, NumberOfEngineers } from 'components';

import TierName from './TierName';
import TierDescription from './TierDescription';
import TierBulletsSection from './TierBulletsSection';

export const OPTIONS_FOR_NUMBER_OF_ENGINEERS = [
  { id: 10, name: '10 developers' },
  { id: 20, name: '20 developers' },
  { id: 30, name: '30 developers' },
  { id: 40, name: '40 developers' },
  { id: 50, name: '50 developers' },
  { id: 75, name: '75 developers' },
  { id: 100, name: '100 developers' },
  { id: 150, name: '150 developers' },
];

const ProPricingTier = () => {
  const [numberOfEngineers, setNumberOfEngineers] = useState(OPTIONS_FOR_NUMBER_OF_ENGINEERS[0].id);
  const dollarCentCostPerDevPerMonth = 1500;
  const dollarCentCostPerMonth = numberOfEngineers * dollarCentCostPerDevPerMonth;

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
      <div className="p-6">
        <TierName name="Pro" />
        <TierDescription description="For teams who want a home for their services, docs, runbooks, API specs and CI." />

        <div className="mt-6">
          <div className="mb-2">
            <span className="text-4xl font-extrabold text-gray-900">{formatter.format(dollarCentCostPerDevPerMonth / 100)}</span>
            <span className="text-base text-gray-500"> per dev/month</span>
          </div>

          <div>
            <span className="text-base text-gray-900">{formatter.format(dollarCentCostPerMonth / 100)} billed monthly</span>
          </div>
        </div>

        <div className="mt-4">
          <NumberOfEngineers
            onChange={setNumberOfEngineers}
            value={numberOfEngineers}
            options={OPTIONS_FOR_NUMBER_OF_ENGINEERS}
            idPrefix="pro-plan-"
          />
        </div>

        <div className="mt-10">
          <Button
            text="Start a trial"
            link={true}
            color="primary"
            to="/free-trial/"
          />
        </div>
      </div>

      <TierBulletsSection
        hasIcon={false}
        bullets={[
          'Unlimited software components tracked.',
          'Unlimited API specs.',
          'Unlimited TechDocs',
          'Unlimited scaffolder templates.',
        ]}
      />

      <TierBulletsSection
        heading="Key features"
        bullets={[
          'Backstage software catalog',
          'Weekly Backstage upgrades',
          'TechDocs technical documentation',
          'Scaffolder service creator',
          'API specs',
          'Vast array of open-source Backstage plugins',
          'Locations log',
          'Tech radar',
          'Kubernetes plugin',
          'Single sign on',
        ]}
      />
    </div>
  );
};

export default ProPricingTier;