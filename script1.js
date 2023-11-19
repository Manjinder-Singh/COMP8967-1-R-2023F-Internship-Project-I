document.addEventListener('DOMContentLoaded', function() {
    const jobPostings = document.getElementById('jobPostings');
    const printButton = document.getElementById('printButton');
    const saveToFileButton = document.getElementById('saveToFileButton');
	const emailSpan = document.getElementById('email');
    const copyButton = document.getElementById('copyButton');

    // Define job postings
    const jobListings = [
        { title: 'Software Engineer', description: 'Join our software development team and work on cutting-edge projects.' },
        { title: 'Data Analyst', description: 'Analyze data and generate insights to drive climate initiatives.' },
        { title: 'Marketing Manager', description: 'Lead our marketing efforts and promote climate-neutral products.' },
        { title: 'Environmental Scientist', description: 'Conduct research and analysis to support sustainability initiatives.' },
        { title: 'Project Manager', description: 'Manage climate-related projects from initiation to completion.' },
        { title: 'Climate Policy Advisor', description: 'Provide expertise on climate policies and regulations.' },
        { title: 'Graphic Designer', description: 'Create visual content to support climate awareness campaigns.' },
        { title: 'Customer Support Specialist', description: 'Assist customers with inquiries related to our climate-neutral products.' },
        { title: 'Finance Analyst', description: 'Analyze financial data for climate investment opportunities.' },
        { title: 'Supply Chain Coordinator', description: 'Optimize supply chain operations for sustainability.' }
    ];

    // Function to create and append job postings
    function createJobPostings() {
        jobListings.forEach((job, index) => {
            const jobPosting = document.createElement('div');
            jobPosting.classList.add('job-posting');

            const title = document.createElement('div');
            title.classList.add('job-title');
            title.textContent = `Job Title: ${job.title}`;

            const description = document.createElement('div');
            description.classList.add('job-description');
            description.textContent = `Description: ${job.description}`;

            jobPosting.appendChild(title);
            jobPosting.appendChild(description);
            jobPostings.appendChild(jobPosting);
        });
    }

    createJobPostings();

    printButton.addEventListener('click', function() {
        window.print();
    });

    saveToFileButton.addEventListener('click', function() {
        const jobData = jobListings.map(job => `${job.title}\t${job.description}`).join('\n');
        const blob = new Blob([jobData], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'job_postings.txt';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();

        // Clean up
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });
	// Copy email address to clipboard
    copyButton.addEventListener('click', function() {
        const emailText = emailSpan.textContent;
        const tempInput = document.createElement('input');
        tempInput.value = emailText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Email address copied to clipboard: ' + emailText);
    });
});
