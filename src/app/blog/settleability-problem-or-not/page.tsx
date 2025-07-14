import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SettleabilityProblemOrNot() {
  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button asChild className="mb-6 primary-gold rounded-full px-6 py-2 font-medium">
          <a href="/blog">← Back to Blog</a>
        </Button>
        
        <Image src="/2.png" alt="Settleability, Problem or Not?" width={800} height={400} className="w-full h-64 object-cover rounded-lg mb-8" />
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 heading-font">
          Settleability, Problem or Not?
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Settleability Test – Interpretation</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            One of the most useful and easy tests for operators to perform is the settleability test. This test provides valuable information about the settling characteristics of the mixed liquor suspended solids (MLSS) in the secondary clarifier. Understanding how to interpret the results is crucial for proper system operation.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">What is Settleability?</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Settleability refers to the ability of the mixed liquor to settle and compact in the secondary clarifier. Good settleability means the solids settle quickly and form a dense sludge blanket, while poor settleability can lead to solids loss in the effluent and operational problems.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Conducting the Settleability Test</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The settleability test is performed by:
          </p>
          <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Taking a sample of mixed liquor from the aeration tank</li>
            <li>Pouring it into a 1-liter graduated cylinder</li>
            <li>Allowing it to settle for 30 minutes</li>
            <li>Recording the volume of settled sludge</li>
          </ol>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Interpreting Results</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The settleability test results are typically expressed as milliliters per liter (mL/L). Here's how to interpret them:
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Normal Settleability Range</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Excellent:</strong> 150-250 mL/L</li>
              <li><strong>Good:</strong> 250-400 mL/L</li>
              <li><strong>Fair:</strong> 400-600 mL/L</li>
              <li><strong>Poor:</strong> 600-800 mL/L</li>
              <li><strong>Very Poor:</strong> 800+ mL/L</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Problems and Solutions</h3>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Bulking Sludge</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            When settleability is poor (high mL/L values), it often indicates bulking sludge. This can be caused by:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Filamentous bacteria overgrowth</li>
            <li>Low dissolved oxygen concentrations</li>
            <li>Nutrient deficiencies</li>
            <li>High organic loading</li>
            <li>Low pH conditions</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Pin Floc</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Small, pinpoint floc particles that don't settle well can indicate:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Young sludge age</li>
            <li>Insufficient mixing</li>
            <li>Chemical imbalances</li>
            <li>Shock loading conditions</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Corrective Actions</h3>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-2">For Bulking Sludge</h4>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Increase dissolved oxygen to &gt;2.0 mg/L</li>
            <li>Add nutrients (nitrogen and phosphorus) if deficient</li>
            <li>Adjust pH to 6.5-8.0</li>
            <li>Reduce organic loading if possible</li>
            <li>Consider chlorination of return activated sludge</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-2">For Pin Floc</h4>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Increase sludge age by reducing wasting</li>
            <li>Improve mixing in aeration tanks</li>
            <li>Add settling aids if necessary</li>
            <li>Investigate and correct shock loading</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Monitoring and Trending</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Regular settleability testing (daily or every shift) helps operators:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Identify problems early before they affect effluent quality</li>
            <li>Track the effectiveness of corrective actions</li>
            <li>Establish baseline performance for their system</li>
            <li>Predict potential upsets</li>
          </ul>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-800 font-medium">
              <strong>Key Takeaway:</strong> The settleability test is a simple but powerful tool for monitoring system health. Regular testing and proper interpretation can prevent many operational problems and ensure consistent effluent quality.
            </p>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Remember that settleability results should be considered along with other operational parameters such as dissolved oxygen, pH, temperature, and effluent quality to get a complete picture of system performance.
          </p>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 mb-8 text-base text-gray-600">
        <Button asChild variant="outline" className="rounded-full px-6 py-2 font-medium">
          <a href="/blog/filaments-what-to-do">&larr; Previous Post</a>
        </Button>
        <Button asChild variant="outline" className="rounded-full px-6 py-2 font-medium">
          <a href="/blog/nitrification-whats-needed">Next Post &rarr;</a>
        </Button>
      </div>
      {/* Leave a Comment */}
      <div className="bg-gray-50 rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Leave a Comment</h2>
        <p className="text-gray-600 mb-4">Your email address will not be published. Required fields are marked *</p>
        <form className="space-y-4">
          <textarea className="w-full border border-gray-300 rounded-lg p-3 min-h-[120px]" placeholder="Type here.." required></textarea>
          <div className="flex flex-col md:flex-row gap-4">
            <input className="flex-1 border border-gray-300 rounded-lg p-3" placeholder="Name*" required />
            <input className="flex-1 border border-gray-300 rounded-lg p-3" placeholder="Email*" type="email" required />
            <input className="flex-1 border border-gray-300 rounded-lg p-3" placeholder="Website" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="save-info" className="h-4 w-4 border-gray-300 rounded" />
            <label htmlFor="save-info" className="text-gray-600 text-sm">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
          <Button type="submit" className="primary-gold rounded-full px-6 py-2 font-medium mt-2">Post Comment</Button>
        </form>
      </div>
    </div>
  );
} 