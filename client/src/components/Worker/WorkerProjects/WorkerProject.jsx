import React from 'react'
import CardWorker from '../../Cards/CardWorker'

function WorkerProject() {
  return (
    <div >
        <Flex>
        <CardWorker
        name = "Pratik Wadke"
        violations= "10"
        attendance = "70"
        position=""
        image ="https://picsum.photos/id/1/200/300"
        pastProjects= "20"
      />
        </Flex>
      
    </div>
  )
}

export default WorkerProject;
