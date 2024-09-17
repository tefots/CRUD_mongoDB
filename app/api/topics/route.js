import { NextResponse } from 'next/server';
import connectMongoDB from '../../libs/mongodb';
import Topic from '../../models/topic';

//method to post data into the database
export async function POST(request) {

    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({title, description });

    return NextResponse.json({message: "Topic was Created successfully"}, { status: 201});
}

//method to get data from the database

export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics});
}

//delete function
export async function DELETE(request) {

    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    console.log('Topic deleted is: ', id);
    return NextResponse.json({ message: "Topic Deleted"}, { status: 200 });

}

// delete function
// export async function DELETE(request) {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');

//     console.log("Received ID:", id); // Debug log

//     // Check if id is provided and valid
//     if (!id || !ObjectId.isValid(id)) {
//         console.log("Invalid ID format"); // Debug log
//         return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
//     }

//     await connectMongoDB();

//     try {
//         const deletedTopic = await Topic.findByIdAndDelete(id);

//         if (!deletedTopic) {
//             return NextResponse.json({ message: 'Topic not found' }, { status: 404 });
//         }

//         return NextResponse.json({ message: 'Topic deleted successfully' }, { status: 200 });
//     } catch (error) {
//         console.log("Error deleting topic:", error); // Debug log
//         return NextResponse.json({ message: 'Error deleting topic', error }, { status: 500 });
//     }
// }