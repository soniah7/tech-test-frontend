# Skedulo Tech Test By Sonia

## Usage Instructions
Install:
    ```yarn bootstrap```
Run:
    ```yarn start```

## Some decisions made in this program:
- Put all the functions integrating different JSON data sources (such as jobs and jobAllocations) into <em>/utils/data-integrator.js</em>
- (q2) For scalability, wrote a function to <strong>add customised css styles for different types of tasks</strong> in <em>/question-two/helpers/lane-css-generator.js</em> (currently we only have two types of tasks displayed in swimlane, which are job and activity as provided in <em>/server/db.json</em>) Also, I wrote generateLanes and generatedCards functions in <em>/question-two/helpers/lane-genertor.js</em> which will loop through all the tasks of different task types (such as job or activity) for a resource and generate cards and lanes. This is scalable too since we could <strong>add another task type with a series of tasks to a resource without changing functions to generate lanes and cards for that specific task type</strong>.
<br />To make it more clear, below is the data structure for a specific resource (integrated with job and activity information): <em>resource = { id: "0", name: "Sam", tasks: {jobsInfo: [{card}, {card}], activitiesInfo: [{card}, {card}]} }</em><br />
- Created <strong>a seperate function module to make asynchronous ajax requests using axios library</strong>. The function returns a promise, which handles different types of errors with different error messages. The promise also transforms value of id field of resolved data from number to string format (as it is previously done in the starter code of this test)
- For folder structure, I tried to put all the reusable UI components that do not rely on business logic in the <em>/components directory</em>


## Room for improvement:
- Make a request for all the data sources once at the time of starting the whole web application and caching it, instead of making requests to server three times (one time for opening one question tab), to optimise performance
- Automated testing
- Really appreciate it if I could get any feedback from you :)

## Last but not least:
  Just want to say thank you for giving me this opportunity. Really appreciate it and look forward to working at such a great company. I would try to add some testing code in the next few days if possible. 
  Please feel free to contact me if you have any question regarding my code. Thank you so much again. 
