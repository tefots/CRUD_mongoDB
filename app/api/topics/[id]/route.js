import { title } from 'process';
import connectMongoDB from '../../../libs/mongodb';
import Topic from '../../../models/topic';
import { NextResponse } from 'next/server';

//function to modify the 1 topic
export async function PUT(request, { params }){
    const { id } = params;
    const { newTitle: title, newDescription: description }= await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, description});
    return NextResponse.json({ message: 'Topic has been updated'}, { status: 200});

}

//function to retrieve 1  topic at a time
export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id});

    console.log('Topic: ', title)
    return NextResponse.json({ topic}, { status: 200});
}