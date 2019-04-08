# track-tools

> A tool for monitoring the GPS tracks logs. You can drag your log files into the tools which is able to generate the 
> track by using Gaode Map.  
> Access: http://location:3000

## track-tools supports the following GPS log format, and It allows to extends to any kinds of  log format
### keywords: __Location:126.58816057813624,43.85210663808183#
> Description(AndroidLogExtractor): Sample: __Provider:network# ,__Time:1545637428552# ,__ElapsedRealtimeNanos:27385918802217# ,__Location:126.58816057813624,43.85210663808183#
### keywords:"lat":"43.85152316623264","lng":"126.61150580512152"
>  Description(ServerLogExtractor): Sample: 2018-12-27 14:49:13.441 INFO MessageDispatcher.java:71 [8100-exec-1] - 上传啦, messageBody:{"msgBody":{"distance":0,"driverId":21,"lat":"43.85152316623264","lng":"126.61150580512152"},"msgType":"DRIVER_LOC","token":"6e4377191f7f4989aa617f8a87b4621c"}

## How to extends track-tools for supporting the different log format.
> 1: Adding a new LogExtractor in the Extractor.js file <br/>
> 2: Appending additional options in the UI. see HelloMars.vue (Array Variable:pointExtractors)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

