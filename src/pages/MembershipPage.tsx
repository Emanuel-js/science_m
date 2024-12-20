import React from 'react';
import MembershipTiers from '../components/membership/MembershipTiers';
import MembershipForm from '../components/membership/MembershipForm';

export default function MembershipPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            Become a Member
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join our community and enjoy exclusive benefits while supporting the museum's mission
            of education and preservation.
          </p>
        </div>
        
        <MembershipTiers />
        
        <div className="mt-16">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white text-center mb-8">
            Register for Membership
          </h2>
          <MembershipForm />
        </div>
      </div>
    </main>
  );
}