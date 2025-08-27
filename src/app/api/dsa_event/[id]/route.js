import { connect } from "@/helpers/connection";
import DsaEvent from "@/models/dsaEventsModel";

import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req, ctx){
    connect();
    const id = ctx.params.id;

    try {
        
        await DsaEvent.findByIdAndDelete(id);
        return NextResponse.json({
            success: true,
            message: "Event Deleted Successfully"            
        })
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            status: 500,
            success: false,
        })
    }
}


