import React from 'react';
import { 
  LineChart, 
  BarChart, 
  PieChart, 
  NetworkUsageChart, 
  TopAppsChart,
  HourlyUsageChart,
  UsagePatternChart
} from './components/Charts';
import { 
  Smartphone, 
  Wifi, 
  Database, 
  FileSpreadsheet, 
  BookOpen, 
  Clock,
  Activity,
  ChevronDown
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">A Month in Data: January 2024</h1>
          <p className="text-xl opacity-90 mb-8">Discover how our digital lives unfold through data patterns and usage behaviors</p>
          <ChevronDown className="w-6 h-6 animate-bounce mx-auto" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Chapter 1: The Big Picture */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6">Chapter 1: The Big Picture</h2>
            <p className="text-gray-600 text-lg mb-8">
              In January 2024, we embarked on a journey to understand how people interact with their digital world. 
              Through careful analysis of data usage patterns, we uncovered fascinating insights about our online behaviors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Database className="mr-2" /> Daily Digital Rhythm
                </h3>
                <p className="text-gray-600 mb-4">
                  Our story begins with the daily ebb and flow of data consumption. Like a digital heartbeat, 
                  it reveals when we're most connected and engaged.
                </p>
                <LineChart />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileSpreadsheet className="mr-2" /> The Content We Consume
                </h3>
                <p className="text-gray-600 mb-4">
                  Breaking down our digital diet reveals a fascinating mix of entertainment, social connection, 
                  and productivity.
                </p>
                <PieChart />
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: A Day in Digital Life */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6">Chapter 2: A Day in Digital Life</h2>
            <p className="text-gray-600 text-lg mb-8">
              As we zoom in to examine a typical 24-hour period, we discover distinct patterns that mirror our daily routines.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="mr-2" /> The Rhythm of Hours
                </h3>
                <p className="text-gray-600 mb-4">
                  From the quiet dawn hours to the bustling evening peaks, our data usage tells the story of our day.
                </p>
                <HourlyUsageChart />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Activity className="mr-2" /> Morning vs Evening: Two Tales
                </h3>
                <p className="text-gray-600 mb-4">
                  The contrast between morning and evening usage reveals how our digital needs evolve throughout the day.
                </p>
                <UsagePatternChart />
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: The Apps That Shape Our Digital Lives */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6">Chapter 3: The Apps That Shape Our Digital Lives</h2>
            <p className="text-gray-600 text-lg mb-8">
              Behind every megabyte lies a story of human connection, entertainment, and productivity.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Smartphone className="mr-2" /> Digital Companions
              </h3>
              <p className="text-gray-600 mb-4">
                These apps have become our constant companions, each serving a unique role in our daily digital journey.
              </p>
              <TopAppsChart />
            </div>
          </div>
        </section>

        {/* Chapter 4: The Networks That Connect Us */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6">Chapter 4: The Networks That Connect Us</h2>
            <p className="text-gray-600 text-lg mb-8">
              Our digital lives are supported by an invisible infrastructure of mobile and WiFi networks.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Wifi className="mr-2" /> The Tale of Two Networks
              </h3>
              <p className="text-gray-600 mb-4">
                The interplay between mobile data and WiFi reveals how we stay connected across different environments.
              </p>
              <NetworkUsageChart />
            </div>
          </div>
        </section>

        {/* Methodology Appendix */}
        <section>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <BookOpen className="mr-2" /> Behind the Numbers
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our analysis is built on a foundation of rigorous methodology and careful data handling.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
                <p className="text-gray-600 mb-4">
                  We followed key principles of transparency, accuracy, and privacy, ensuring all data collection 
                  adheres to GDPR guidelines and industry best practices.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Data Collection</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>System logs from device settings</li>
                    <li>Network traffic monitoring</li>
                    <li>App usage statistics</li>
                    <li>5-minute sampling intervals</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Processing & Analysis</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Cleaning incomplete records</li>
                    <li>UTC time normalization</li>
                    <li>Hourly data aggregation</li>
                    <li>Pattern recognition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;