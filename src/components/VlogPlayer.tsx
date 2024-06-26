'use client'
import { useRef, useEffect, useState } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";
export function VlogPlayer({vdoSrc, isPlaying}: {vdoSrc:string, isPlaying:boolean}) {
    
    const vdoRef = useRef<HTMLVideoElement>(null)
    
    useWindowListener("resize", (e)=>alert('Window Width is ' + (e.target as Window).innerWidth))

    useEffect(() => {
        if(isPlaying) vdoRef.current?.play()
        else vdoRef.current?.pause()
    }, [isPlaying])

    return(
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted/>
    );
}