import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const response = NextResponse.json({
      message: "Logout successfully",
      sucess: true,
    });

    // response.cookies.set("token", "", {
    //   httpOnly: true,
    //   expires: new Date(0),
    // });

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    // cookies().delete('token')
    // cookies().set('token', '', { expires: Date.now() - 86400 })

    return response;
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
      success: false,
    });
  }
}
