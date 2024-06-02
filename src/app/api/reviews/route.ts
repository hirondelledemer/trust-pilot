import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const args = await request.json();

    const result = await prisma.review.create({
      data: {
        content: args.content,
        title: args.title,
        date: args.date,
        rating: args.rating,
      },
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
