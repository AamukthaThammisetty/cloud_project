'use client'
import * as React from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function InterviewCard({ jobDetails }) {
  const router = useRouter();
  const startInterview = (_id) => {
    router.push(`/interview/${_id}`)
  }

  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <CardHeader className="p-4 bg-gray-100">
        <CardTitle className="text-lg font-semibold text-gray-800">{jobDetails.jobPosition}</CardTitle>
        <CardDescription className="text-sm text-gray-600">{jobDetails.jobDesc}</CardDescription>
      </CardHeader>
      {/* <CardContent className="">
      </CardContent> */}
      <CardFooter className="flex w-full justify-between p-2 gap-2 bg-gray-100">
        <Button variant="outline" className="text-gray-700 w-full hover:bg-gray-200">Feedback</Button>
        <Button onClick={() => startInterview(jobDetails._id)} className="bg-blue-600 text-white w-full hover:bg-blue-700">Start</Button>
      </CardFooter>
    </Card>
  );
}