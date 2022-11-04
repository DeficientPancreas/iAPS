var freeaps_determineBasal;(()=>{var e={5546:(e,t,r)=>{var o=r(6880);function i(e,a){a||(a=0);var t=Math.pow(10,a);return Math.round(e*t)/t}function n(e,a){return"mmol/L"===a.out_units?i(.0555*e,1):Math.round(e)}var s="",l="",m="",u="",d="",c="",g="",h="",p="";function f(e,a){var t=[2,7,12,16,20,50,60,80,90,100,110,150,180,200],r=[0,0,.4,.7,.7,-.5,-.5,-.3,-.2,0,0,.5,.7,.7],o=t.length-1,i=t[0],n=r[0],s=t[o],l=r[o],m=1,u=1,d=1,c=i;if(i>e)m=(u=n)+((l=r[1])-u)/((s=t[1])-(d=i))*(e-d);else if(s<e)m=(u=n=r[o-1])+(l-u)/(s-(d=i=t[o-1]))*(e-d);else for(var g=0;g<=o;g++){if(n=r[g],(i=t[g])==e){m=n;break}if(i>e){m=u+(n-u)/(i-(d=c))*(e-d);break}u=n,c=i}return m*=e>100?a.higher_ISFrange_weight:e>40?a.lower_ISFrange_weight:a.delta_ISFrange_weight}function b(e,a,t){if(void 0===e.smb_delivery_ratio_bg_range||0===e.smb_delivery_ratio_bg_range)return console.error("SMB delivery ratio set to fixed value "+e.smb_delivery_ratio),e.smb_delivery_ratio;var r=Math.min(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max);if(a<=t)return console.error("SMB delivery ratio limited by minimum value "+r),r;var o=Math.max(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max);if(a>=t+e.smb_delivery_ratio_bg_range)return console.error("SMB delivery ratio limited by maximum value "+o),o;var n=r+(o-r)*(a-t)/e.smb_delivery_ratio_bg_range;return console.error("SMB delivery ratio set to interpolated value "+i(n,2)),n}e.exports=function(e,t,r,v,B,_,M,y,x,S,w,C,D,F,I){var G=0,T="",U="",O="",R="",A="",P=0,j=(F=0,0),k=0,W=0,q=0;const E=I.weightedAverage,L=v.weightPercentage,z=I.average_total_data;function N(e,a){var t=e.getTime();return new Date(t+36e5*a)}function Z(e){var a=v.bolus_increment;.05!=a&&(a=.1);var t=e/a;return t>=1?i(Math.floor(t)*a,5):0}function H(e){function a(e){return e<10&&(e="0"+e),e}return a(e.getHours())+":"+a(e.getMinutes())+":00"}function $(e,a){var t=new Date("1/1/1999 "+e),r=new Date("1/1/1999 "+a);return(t.getTime()-r.getTime())/36e5}function J(e,a){var t=0,r=a,o=(e-a)/36e5,i=0,n=o,s=0;do{if(o>0){var l=H(r),m=D[0].rate;for(let e=0;e<D.length;e++){var u=D[e].start;if(l==u){if(e+1<D.length){o>=(s=$(D[e+1].start,D[e].start))?i=s:o<s&&(i=o)}else if(e+1==D.length){let a=D[0].start;o>=(s=24-$(D[e].start,a))?i=s:o<s&&(i=o)}t+=Z((m=D[e].rate)*i),o-=i,console.log("Dynamic ratios log: scheduled insulin added: "+Z(m*i)+" U. Bas duration: "+i.toPrecision(3)+" h. Base Rate: "+m+" U/h. Time :"+l),r=N(r,i)}else if(l>u)if(e+1<D.length){var d=D[e+1].start;l<d&&(o>=(s=$(d,l))?i=s:o<s&&(i=o),t+=Z((m=D[e].rate)*i),o-=i,console.log("Dynamic ratios log: scheduled insulin added: "+Z(m*i)+" U. Bas duration: "+i.toPrecision(3)+" h. Base Rate: "+m+" U/h. Time :"+l),r=N(r,i))}else if(e==D.length-1){o>=(s=$("23:59:59",l))?i=s:o<s&&(i=o),t+=Z((m=D[e].rate)*i),o-=i,console.log("Dynamic ratios log: scheduled insulin added: "+Z(m*i)+" U. Bas duration: "+i.toPrecision(3)+" h. Base Rate: "+m+" U/h. Time :"+l),r=N(r,i)}}}}while(o>0&&o<n);return t}if(w.length){let e=w.length-1;var K=new Date(w[e].timestamp),Q=new Date(w[0].timestamp);if("TempBasalDuration"==w[0]._type&&(Q=new Date),(G=(Q-K)/36e5)<23.9&&G>21)W=J(K,(V=24-G,X=K.getTime(),new Date(X-36e5*V))),R="24 hours of data is required for an accurate tdd calculation. Currently only "+G.toPrecision(3)+" hours of pump history data are available. Using your pump scheduled basals to fill in the missing hours. Scheduled basals added: "+W.toPrecision(5)+" U. ";else R=""}else console.log("Pumphistory is empty!"),se=!1,enableDynamicCR=!1;var V,X;for(let e=0;e<w.length;e++)"Bolus"==w[e]._type&&(k+=w[e].amount);for(let e=1;e<w.length;e++)if("TempBasal"==w[e]._type&&w[e].rate>0){P=e,q=w[e].rate;var Y=w[e-1]["duration (min)"]/60,ee=Y,ae=new Date(w[e-1].timestamp),te=ae;do{if(e--,0==e){te=new Date;break}if("TempBasal"==w[e]._type||"PumpSuspend"==w[e]._type){te=new Date(w[e].timestamp);break}}while(e>0);var re=(te-ae)/36e5;re<ee&&(Y=re),j+=Z(q*Y),e=P}for(let e=0;e<w.length;e++)if(0,0==w[e]["duration (min)"]||"PumpResume"==w[e]._type){let a=new Date(w[e].timestamp),t=a,r=e;do{if(r>0&&(--r,"TempBasal"==w[r]._type)){t=new Date(w[r].timestamp);break}}while(r>0);(t-a)/36e5>0&&(W+=J(t,a))}for(let e=w.length-1;e>0;e--)if("TempBasalDuration"==w[e]._type){let a=w[e]["duration (min)"]/60,t=new Date(w[e].timestamp);var oe=t;let r=e;do{if(--r,r>=0&&("TempBasal"==w[r]._type||"PumpSuspend"==w[r]._type)){oe=new Date(w[r].timestamp);break}}while(r>0);if(0==e&&"TempBasalDuration"==w[0]._type&&(oe=new Date,a=w[e]["duration (min)"]/60),(oe-t)/36e5-a>0){W+=J(oe,N(t,a))}}var ie=F=k+j+W;G>21?(U=". Bolus insulin: "+k.toPrecision(5)+" U",O=". Temporary basal insulin: "+j.toPrecision(5)+" U",T=". Insulin with scheduled basal rate: "+W.toPrecision(5)+" U",A=R+(" TDD past 24h is: "+F.toPrecision(5)+" U")+U+O+T,tddReason=E>0&&z>0?", TDD: "+i(F,1)+" U, Weighted avg: "+i(E,1)+" U, Total data avg: "+i(z,1)+" U":", TDD: "+i(F,2)):tddReason=", TDD: Not enough pumpData (< 21h)";const ne=e.glucose;var se=C.enableChris,le=C.enableDynamicCR;const me=Math.min(v.autosens_min,v.autosens_max),ue=Math.max(v.autosens_min,v.autosens_max),de=C.adjustmentFactor,ce=v.min_bg;var ge=!1,he="",pe=1,fe="";z>0&&(pe=E/z),fe=pe>1?"Basal adjustment with a 24 hour  to total average (up to 14 days of data) TDD ratio (limited by Autosens max setting). Basal Ratio: "+(pe=i(pe=Math.min(pe,v.autosens_max),2))+". Upper limit = Autosens max ("+v.autosens_max+")":pe<1?"Basal adjustment with a 24 hour to  to total average (up to 14 days of data) TDD ratio (limited by Autosens min setting). Basal Ratio: "+(pe=i(pe=Math.max(pe,v.autosens_min),2))+". Lower limit = Autosens min ("+v.autosens_min+")":"Basal adjusted with a 24 hour to total average (up to 14 days of data) TDD ratio: "+pe,fe=", Basal ratio: "+pe,1!=v.high_temptarget_raises_sensitivity&&1!=v.exercise_mode||(ge=!0),se&&(v.use_autoisf=!1,console.log("autoISF is off. dynISF is on")),ce>=118&&1==ge&&(v.use_autoisf=!1,se=!1,he="Dynamic ISF temporarily off due to a high temp target/exercising. Current min target: "+ce);var be=", Dynamic ratios log: ",ve=", AF: "+de,Be="BG: "+ne+" mg/dl ("+(.0555*ne).toPrecision(2)+" mmol/l)",_e="",Me="";const ye=C.curve,xe=C.insulinPeakTime,Se=C.useCustomPeakTime;var we=55,Ce=65;switch(ye){case"rapid-acting":Ce=65;break;case"ultra-rapid":Ce=50}if(Se?(we=120-xe,console.log("Custom insulinpeakTime set to :"+xe+", insulinFactor: "+we)):(we=120-Ce,console.log("insulinFactor set to : "+we)),ie=F,L<1&&E>0&&(F=E,console.log("Using weighted TDD average: "+i(F,2)+" U, instead of past 24 h ("+i(ie,2)+" U), weight: "+L),Me=", Weighted TDD: "+i(F,2)+" U"),C.useNewFormula&&se){var De=v.sens*de*F*Math.log(ne/we+1)/1800;_e=", Logarithmic formula"}else if(se){De=v.sens*de*F*ne/277700;_e=", Original formula"}var Fe=v.carb_ratio,Ie="",Ge="";if(se&&F>0){if(Ie=", Dynamic ISF/CR: On/",De>ue?(he=", Dynamic ISF limited by autosens_max setting: "+ue+" ("+i(De,2)+"), ",Ge=", Autosens/Dynamic Limit: "+ue+" ("+i(De,2)+")",De=ue):De<me&&(he=", Dynamic ISF limjted by autosens_min setting: "+me+" ("+i(De,2)+"). ",Ge=", Autosens/Dynamic Limit: "+me+" ("+i(De,2)+")",De=me),le){Ie+="On";var Te=De;De>1&&(Te=(De-1)/2+1);var Ue=" CR: "+(Fe=i(Fe/Te,2))+" g/U";v.carb_ratio=Fe}else Ue=" CR: "+Fe+" g/U",Ie+="Off";var Oe=v.sens/De;he+=", Dynamic autosens.ratio set to "+i(De,2)+" with ISF: "+Oe.toPrecision(3)+" mg/dl/U ("+(.0555*Oe).toPrecision(3)+" mmol/l/U)"+Ie,B.ratio=De,A+=be+Be+ve+_e+he+Ue+Me}else A+=be+"Dynamic Settings disabled";console.log(A),se||le?se&&v.tddAdjBasal?tddReason+=Ie+_e+Ge+ve+fe:se&&!v.tddAdjBasal&&(tddReason+=Ie+_e+Ge+ve):tddReason+="";var Re={},Ae=new Date;if(S&&(Ae=S),void 0===v||void 0===v.current_basal)return Re.error="Error: could not get current basal rate",Re;var Pe=o(v.current_basal,v),je=Pe,ke=new Date;S&&(ke=S);var We,qe=new Date(e.date),Ee=i((ke-qe)/60/1e3,1),Le=e.glucose,ze=e.noise;We=e.delta>-.5?"+"+i(e.delta,0):i(e.delta,0);var Ne=Math.min(e.delta,e.short_avgdelta),Ze=Math.min(e.short_avgdelta,e.long_avgdelta),He=Math.max(e.delta,e.short_avgdelta,e.long_avgdelta);(Le<=10||38===Le||ze>=3)&&(Re.reason="CGM is calibrating, in ??? state, or noise is high");if(Le>60&&0==e.delta&&e.short_avgdelta>-1&&e.short_avgdelta<1&&e.long_avgdelta>-1&&e.long_avgdelta<1&&("fakecgm"==e.device?(console.error("CGM data is unchanged ("+n(Le,v)+"+"+n(e.delta,v)+") for 5m w/ "+n(e.short_avgdelta,v)+" mg/dL ~15m change & "+n(e.long_avgdelta,2)+" mg/dL ~45m change"),console.error("Simulator mode detected ("+e.device+"): continuing anyway")):!0),Ee>12||Ee<-5?Re.reason="If current system time "+ke+" is correct, then BG data is too old. The last BG data was read "+Ee+"m ago at "+qe:0===e.short_avgdelta&&0===e.long_avgdelta&&(e.last_cal&&e.last_cal<3?Re.reason="CGM was just calibrated":Re.reason="CGM data is unchanged ("+n(Le,v)+"+"+n(e.delta,v)+") for 5m w/ "+n(e.short_avgdelta,v)+" mg/dL ~15m change & "+n(e.long_avgdelta,v)+" mg/dL ~45m change"),Le<=10||38===Le||ze>=3||Ee>12||Ee<-5||0===e.short_avgdelta&&0===e.long_avgdelta)return t.rate>=je?(Re.reason+=". Canceling high temp basal of "+t.rate,Re.deliverAt=Ae,Re.temp="absolute",Re.duration=0,Re.rate=0,Re):0===t.rate&&t.duration>30?(Re.reason+=". Shortening "+t.duration+"m long zero temp to 30m. ",Re.deliverAt=Ae,Re.temp="absolute",Re.duration=30,Re.rate=0,Re):(Re.reason+=". Temp "+t.rate+" <= current basal "+je+"U/hr; doing nothing. ",Re);var $e,Je,Ke,Qe,Ve=v.max_iob;if(void 0!==v.min_bg&&(Je=v.min_bg),void 0!==v.max_bg&&(Ke=v.max_bg),void 0!==v.enableSMB_high_bg_target&&(Qe=v.enableSMB_high_bg_target),void 0===v.min_bg||void 0===v.max_bg)return Re.error="Error: could not determine target_bg. ",Re;$e=(v.min_bg+v.max_bg)/2;var Xe=v.exercise_mode||v.high_temptarget_raises_sensitivity,Ye=100,ea=160;if(v.half_basal_exercise_target&&(ea=v.half_basal_exercise_target),Xe&&v.temptargetSet&&$e>Ye||v.low_temptarget_lowers_sensitivity&&v.temptargetSet&&$e<Ye){var aa=ea-Ye;sensitivityRatio=aa*(aa+$e-Ye)<=0?v.autosens_max:aa/(aa+$e-Ye),sensitivityRatio=Math.min(sensitivityRatio,v.autosens_max),sensitivityRatio=i(sensitivityRatio,2),process.stderr.write("Sensitivity ratio set to "+sensitivityRatio+" based on temp target of "+$e+"; ")}else void 0!==B&&B&&(sensitivityRatio=B.ratio,process.stderr.write("Autosens ratio: "+sensitivityRatio+"; "));if(v.temptargetSet&&$e<Ye&&v.enableChris&&ne>=$e&&sensitivityRatio<De&&(sensitivityRatio=De*(Ye/$e),Math.min(sensitivityRatio,v.autosens_max),console.log("Dynamic ratio increased from "+i(De,2)+" to "+i(sensitivityRatio,2)+" due to a low temp target ("+$e+").")),sensitivityRatio&&0==v.enableChris?(je=v.current_basal*sensitivityRatio,je=o(je,v)):v.enableChris&&v.tddAdjBasal&&(je=v.current_basal*pe,je=o(je,v),process.stderr.write("TDD-adjustment of basals activated, using tdd24h_14d_Ratio "+i(pe,2)+", TDD 24h = "+i(ie,2)+"U, Weighted average TDD = "+i(E,2)+"U, (Weight percentage = "+L+"), Total data of TDDs (up to 14 days) average = "+i(z,2)+"U. "),je!==Pe?process.stderr.write("Adjusting basal from "+Pe+" U/h to "+je+" U/h; "):process.stderr.write("Basal unchanged: "+je+" U/h; ")),v.temptargetSet);else if(void 0!==B&&B&&(v.sensitivity_raises_target&&B.ratio<1||v.resistance_lowers_target&&B.ratio>1)){Je=i((Je-60)/B.ratio)+60,Ke=i((Ke-60)/B.ratio)+60;var ta=i(($e-60)/B.ratio)+60;$e===(ta=Math.max(80,ta))?process.stderr.write("target_bg unchanged: "+ta+"; "):process.stderr.write("target_bg from "+$e+" to "+ta+"; "),$e=ta}var ra=200,oa=200,ia=200;if(e.noise>=2){var na=Math.max(1.1,v.noisyCGMTargetMultiplier);Math.min(250,v.maxRaw);ra=i(Math.min(200,Je*na)),oa=i(Math.min(200,$e*na)),ia=i(Math.min(200,Ke*na)),process.stderr.write("Raising target_bg for noisy / raw CGM data, from "+$e+" to "+oa+"; "),Je=ra,$e=oa,Ke=ia}var sa=Je-.5*(Je-40),la=v.threshold_setting;la>sa&&la<=120&&la>=65?(console.error("Threshold changed in settings from "+n(sa,v)+" to "+n(la,v)+". "),sa=la):console.error("Current threshold: "+n(sa,v));var ma=i(v.sens,1),ua=v.sens;if(void 0!==B&&B&&((ua=i(ua=v.sens/sensitivityRatio,1))!==ma?process.stderr.write("ISF from "+n(ma,v)+" to "+n(ua,v)):process.stderr.write("ISF unchanged: "+n(ua,v)),s+="Autosens ratio: "+i(sensitivityRatio,2)+", ISF: "+n(ma,v)+"→"+n(ua,v)),console.error("CR:"+v.carb_ratio),ua=function(e,a,t,r,o,v,B,_){if(!t.use_autoisf)return console.error("autoISF disabled in Preferences"),e;var M=r.dura_p,y=r.delta_pl,x=r.delta_pn,S=r.r_squ,w=r.bg_acceleration,C=r.parabola_fit_a0,D=r.parabola_fit_a1,F=r.parabola_fit_a2,I=r.autoISF_duration,G=r.autoISF_average,T=t.autoisf_max,U=!1,O=1,R=1,A=1,P=a+10-G;if(!(o.mealCOB>0)||t.enableautoisf_with_COB){var j=r.pp_debug;if(c+="BG-accel: "+i(w,3)+", PF-minutes: "+M+", PF-corr: "+i(S,4)+", PF-nextDelta: "+n(x,t)+", PF-lastDelta: "+n(y,t)+", regular Delta: "+n(r.delta,t),console.error(j+c+" , Weights Accel/Brake: "+t.bgAccel_ISF_weight+" / "+t.bgBrake_ISF_weight),t.enable_BG_acceleration){var k=w;if(0!=r.parabola_fit_a2){var W=-D/2/F*5,q=i(C-W*W/25*F,1);(W=i(W,1))<0&&k<0?(p="saw max of "+n(q,t)+", about "+-W+" min ago",console.error("Parabolic fit "+p)):W<0&&k>0?(p="saw min of "+n(q,t)+", about "+-W+" min ago",console.error("Parabolic fit "+p)):W>0&&k<0?(p="predicts max of "+n(q,t)+", in about "+W+"min",console.error("Parabolic fit "+p)):W>0&&k>0&&(p="predicts min of "+n(q,t)+", in about "+W+" min",console.error("Parabolic fit "+p))}var E=S;if(E<=.9)p="acce_ISF by-passed, as correlation, "+i(E,3)+", is too low",console.error("Parabolic fit "+p),g+=", Parabolic Fit, "+p;else{g+=", Parabolic Fit, "+p+", lastΔ: "+n(y,t)+", nextΔ: "+n(x,t)+", Corr "+i(S,3)+", BG-Accel: "+i(k,2);var L=10*(E-.9),z=1;r.glucose<t.target_bg&&k>1&&(z=.5),A=1+k*z*(k<0?t.bgBrake_ISF_weight:t.bgAccel_ISF_weight)*L,console.error("Original result for acce_ISF: "+i(A,2)),1!=A&&(U=!0,g+=", acce-ISF Ratio: "+i(A,2))}}else console.error("autoISF BG accelertion adaption disabled in Preferences");var N=b(t,r.glucose,a);s+=", SMB Delivery Ratio:, "+i(N,2)+g+", autoISF";var Z=1+f(100-P,t);console.error("bg_ISF adaptation is "+i(Z,2)),Z<1&&A>1&&(h="bg-ISF adaptation lifted to "+i(Z*=A,2)+", as BG accelerates already",l="(lifted by "+i(A,2)+")",console.error(h));var H=1;if(Z<1)return(H=Math.min(Z,A))<t.autoisf_min&&(h="final ISF factor "+i(H,2)+" limited by autoisf_min "+t.autoisf_min,console.error(h),H=t.autoisf_min),l=" (lmtd.)",earlysens=Math.min(720,i(t.sens/Math.min(_,H),1)),console.error("early Return autoISF:  "+n(earlysens,t)),s+=", bg-ISF Ratio: "+i(Z,2)+l+", ISF: "+n(earlysens,t),earlysens;Z>1&&(U=!0,s+=", bg-ISF Ratio: "+i(Z,2));var $=r.delta;P>0?console.error("delta_ISF adaptation by-passed as average glucose < "+n(a+10,t)):r.short_avgdelta<0?console.error("delta_ISF adaptation by-passed as no rise or too short lived"):t.enableppisf_always||t.postmeal_ISF_duration>=(v-o.lastCarbTime)/1e3/3600?(O=1+Math.max(0,$*t.postmeal_ISF_weight),console.error("pp_ISF adaptation is "+i(O,2)),u=", pp-ISF Ratio: "+i(O,2),1!=O&&(U=!0)):(R=f($,t),P>-20&&(R*=.5),R=1+R,console.error("delta_ISF adaptation is "+i(R,2)),d=", Δ-ISF Ratio: "+i(R,2),1!=R&&(U=!0));var J=1,K=t.autoisf_hourlychange;return o.mealCOB>0&&!t.enableautoisf_with_COB?console.error("dura_ISF by-passed; preferences disabled mealCOB of "+i(o.mealCOB,1)):I<10?console.error("dura_ISF by-passed; BG is only "+I+"m at level "+G):G<=a?console.error("dura_ISF by-passed; avg. glucose "+G+" below target "+n(a,t)):(J+=I/60*(K/a)*(G-a),U=!0,m=", Duration: "+I+", Avg: "+n(G,t)+", dura-ISF Ratio: "+i(J,2),console.error("dura_ISF  adaptation is "+i(J,2)+" because ISF "+e+" did not do it for "+i(I,1)+"m")),H=1,U?(H=Math.max(J,Z,R,A,O),console.error("autoISF adaption ratios:"),console.error("  dura "+i(J,2)),console.error("  bg "+i(Z,2)),console.error("  delta "+i(R,2)),console.error("  pp "+i(O,2)),console.error("  accel "+i(A,2)),A<1&&(console.error("strongest ISF factor "+i(H,2)+" weakened to "+i(H*A,2)+" as bg decelerates already"),H*=A),H<t.autoisf_min?(console.error("final ISF factor "+i(H,2)+" limited by autoisf_min "+t.autoisf_min),H=t.autoisf_min):H>T&&(console.error("final ISF factor "+i(H,2)+" limited by autoisf_max "+T),H=T),H>=1&&(e=i(t.sens/Math.max(H,_),1)),H<1&&(e=i(t.sens/Math.min(H,_),1))):H=_,s+=u+d+m+", Ratio: "+i(H,2)+", ISF: "+n(e,t),console.error("Inside autoISF: Ratio "+i(H,2)+" resulting in "+n(e,t)),e}console.error("BG dependant autoISF by-passed; preferences disabled mealCOB of "+i(o.mealCOB,1))}(ua,$e,v,e,_,S,0,sensitivityRatio),void 0===r)return Re.error="Error: iob_data undefined. ",Re;var da,ca=r;if(r.length,r.length>1&&(r=ca[0]),void 0===r.activity||void 0===r.iob)return Re.error="Error: iob_data missing some property. ",Re;var ga=((da=void 0!==r.lastTemp?i((new Date(ke).getTime()-r.lastTemp.date)/6e4):0)+t.duration)%30;if(console.error("currenttemp:"+t.rate+" lastTempAge:"+da+"m, tempModulus:"+ga+"m"),Re.temp="absolute",Re.deliverAt=Ae,y&&t&&r.lastTemp&&t.rate!==r.lastTemp.rate&&da>10&&t.duration)return Re.reason="Warning: currenttemp rate "+t.rate+" != lastTemp rate "+r.lastTemp.rate+" from pumphistory; canceling temp",M.setTempBasal(0,0,v,Re,t);if(t&&r.lastTemp&&t.duration>0){var ha=da-r.lastTemp.duration;if(ha>5&&da>10)return Re.reason="Warning: currenttemp running but lastTemp from pumphistory ended "+ha+"m ago; canceling temp",M.setTempBasal(0,0,v,Re,t)}var pa=i(-r.activity*ua*5,2),fa=i(6*(Ne-pa));fa<0&&(fa=i(6*(Ze-pa)))<0&&(fa=i(6*(e.long_avgdelta-pa)));var ba=Le,va=(ba=r.iob>0?i(Le-r.iob*ua):i(Le-r.iob*Math.min(ua,v.sens)))+fa;if(void 0===va||isNaN(va))return Re.error="Error: could not calculate eventualBG. Sensitivity: "+ua+" Deviation: "+fa,Re;var Ba=function(e,a,t){return i(t+(e-a)/24,1)}($e,va,pa);Re={temp:"absolute",bg:Le,tick:We,eventualBG:va,insulinReq:0,reservoir:x,deliverAt:Ae,sensitivityRatio,TDD:ie};var _a=[],Ma=[],ya=[],xa=[];_a.push(Le),Ma.push(Le),xa.push(Le),ya.push(Le);var Sa=function(e,a,t,r,o,i){return a?!e.allowSMB_with_high_temptarget&&e.temptargetSet&&o>100?(console.error("SMB disabled due to high temptarget of "+o),!1):!0===t.bwFound&&!1===e.A52_risk_enable?(console.error("SMB disabled due to Bolus Wizard activity in the last 6 hours."),!1):!0===e.enableSMB_always?(t.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled due to enableSMB_always"),!0):!0===e.enableSMB_with_COB&&t.mealCOB?(t.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for COB of "+t.mealCOB),!0):!0===e.enableSMB_after_carbs&&t.carbs?(t.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for 6h after carb entry"),!0):!0===e.enableSMB_with_temptarget&&e.temptargetSet&&o<100?(t.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for temptarget of "+n(o,e)),!0):!0===e.enableSMB_high_bg&&null!==i&&r>=i?(console.error("Checking BG to see if High for SMB enablement."),console.error("Current BG",r," | High BG ",i),t.bwFound?console.error("Warning: High BG SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("High BG detected. Enabling SMB."),!0):(console.error("SMB disabled (no enableSMB preferences active or no condition satisfied)"),!1):(console.error("SMB disabled (!microBolusAllowed)"),!1)}(v,y,_,Le,$e,Qe),wa=v.enableUAM,Ca=0,Da=0;Ca=i(Ne-pa,1);var Fa=i(Ne-pa,1);csf=ua/v.carb_ratio,console.error("profile.sens:"+n(v.sens,v)+", sens:"+n(ua,v)+", CSF:"+i(csf,1));var Ia=i(30*csf*5/60,1);Ca>Ia&&(console.error("Limiting carb impact from "+Ca+" to "+Ia+"mg/dL/5m (30g/h)"),Ca=Ia);var Ga=3;sensitivityRatio&&(Ga/=sensitivityRatio);var Ta=Ga;if(_.carbs){Ga=Math.max(Ga,_.mealCOB/20);var Ua=i((new Date(ke).getTime()-_.lastCarbTime)/6e4),Oa=(_.carbs-_.mealCOB)/_.carbs;Ta=i(Ta=Ga+1.5*Ua/60,1),console.error("Last carbs "+Ua+" minutes ago; remainingCATime:"+Ta+"hours; "+i(100*Oa,1)+"% carbs absorbed")}var Ra=Math.max(0,Ca/5*60*Ta/2)/csf,Aa=90,Pa=1;v.remainingCarbsCap&&(Aa=Math.min(90,v.remainingCarbsCap)),v.remainingCarbsFraction&&(Pa=Math.min(1,v.remainingCarbsFraction));var ja=1-Pa,ka=Math.max(0,_.mealCOB-Ra-_.carbs*ja),Wa=(ka=Math.min(Aa,ka))*csf*5/60/(Ta/2),qa=i(_.slopeFromMaxDeviation,2),Ea=i(_.slopeFromMinDeviation,2),La=Math.min(qa,-Ea/3),za=0;0===Ca?Da=0:!0===v.floating_carbs?(Da=Math.min(60*Ta/5/2,Math.max(0,_.carbs*csf/Ca)),za=Math.min(60*Ta/5/2,Math.max(0,_.mealCOB*csf/Ca)),_.carbs>0&&(s+=", Floating Carbs:, CID: "+i(Da,1)+", MealCarbs: "+i(_.carbs,1)+", Not Floating:, CID: "+i(za,1)+", MealCOB: "+i(_.mealCOB,1),console.error("Floating Carbs CID: "+i(Da,1)+" / MealCarbs: "+i(_.carbs,1)+" vs. Not Floating:"+i(za,1)+" / MealCOB:"+i(_.mealCOB,1)))):Da=Math.min(60*Ta/5/2,Math.max(0,_.mealCOB*csf/Ca)),console.error("Carb Impact:"+Ca+"mg/dL per 5m; CI Duration:"+i(5*Da/60*2,1)+"hours; remaining CI ("+Ta/2+"h peak):"+i(Wa,1)+"mg/dL per 5m");var Na,Za,Ha,$a,Ja,Ka=999,Qa=999,Va=999,Xa=Le,Ya=999,et=999,at=999,tt=999,rt=va,ot=Le,it=Le,nt=0,st=[],lt=[];try{ca.forEach((function(e){var a=i(-e.activity*ua*5,2),t=i(-e.iobWithZeroTemp.activity*ua*5,2),r=Ca*(1-Math.min(1,Ma.length/12));if(!0==(1==se&&1==C.useNewFormula)){rt=Ma[Ma.length-1]+i(-e.activity*(1800/(F*de*Math.log(Math.max(Ma[Ma.length-1],39)/we+1)))*5,2)+r;var o=xa[xa.length-1]+i(-e.iobWithZeroTemp.activity*(1800/(F*de*Math.log(Math.max(xa[xa.length-1],39)/we+1)))*5,2);console.log("Dynamic ISF (Logarithmic Formula) )adjusted predictions for IOB and ZT: IOBpredBG: "+i(rt,2)+" , ZTpredBG: "+i(o,2))}else{rt=Ma[Ma.length-1]+a+r;o=xa[xa.length-1]+t}var n=Math.max(0,Math.max(0,Ca)*(1-_a.length/Math.max(2*Da,1))),s=Math.min(_a.length,12*Ta-_a.length),l=Math.max(0,s/(Ta/2*12)*Wa);n+l,st.push(i(l,0)),lt.push(i(n,0)),COBpredBG=_a[_a.length-1]+a+Math.min(0,r)+n+l;var m=Math.max(0,Fa+ya.length*La),u=Math.max(0,Fa*(1-ya.length/Math.max(36,1))),d=Math.min(m,u);if(d>0&&(nt=i(5*(ya.length+1)/60,1)),!0==(1==se&&1==C.useNewFormula))UAMpredBG=ya[ya.length-1]+i(-e.activity*(1800/(F*de*Math.log(Math.max(ya[ya.length-1],39)/we+1)))*5,2)+Math.min(0,r)+d,console.log("Dynamic ISF (Logarithmic Formula) adjusted prediction for UAM: UAMpredBG: "+i(UAMpredBG,2));else UAMpredBG=ya[ya.length-1]+a+Math.min(0,r)+d;Ma.length<48&&Ma.push(rt),_a.length<48&&_a.push(COBpredBG),ya.length<48&&ya.push(UAMpredBG),xa.length<48&&xa.push(o),COBpredBG<Ya&&(Ya=i(COBpredBG)),UAMpredBG<et&&(et=i(UAMpredBG)),rt<at&&(at=i(rt)),o<tt&&(tt=i(o));Ma.length>18&&rt<Ka&&(Ka=i(rt)),rt>ot&&(ot=rt),(Da||Wa>0)&&_a.length>18&&COBpredBG<Qa&&(Qa=i(COBpredBG)),(Da||Wa>0)&&COBpredBG>ot&&(it=COBpredBG),wa&&ya.length>12&&UAMpredBG<Va&&(Va=i(UAMpredBG)),wa&&UAMpredBG>ot&&UAMpredBG}))}catch(e){console.error("Problem with iobArray.  Optional feature Advanced Meal Assist disabled")}_.mealCOB&&(console.error("predCIs (mg/dL/5m):"+lt.join(" ")),console.error("remainingCIs:      "+st.join(" "))),Re.predBGs={},Ma.forEach((function(e,a,t){t[a]=i(Math.min(401,Math.max(39,e)))}));for(var mt=Ma.length-1;mt>12&&Ma[mt-1]===Ma[mt];mt--)Ma.pop();for(Re.predBGs.IOB=Ma,Ha=i(Ma[Ma.length-1]),xa.forEach((function(e,a,t){t[a]=i(Math.min(401,Math.max(39,e)))})),mt=xa.length-1;mt>6&&!(xa[mt-1]>=xa[mt]||xa[mt]<=$e);mt--)xa.pop();if(Re.predBGs.ZT=xa,i(xa[xa.length-1]),_.mealCOB>0&&(Ca>0||Wa>0)){for(_a.forEach((function(e,a,t){t[a]=i(Math.min(401,Math.max(39,e)))})),mt=_a.length-1;mt>12&&_a[mt-1]===_a[mt];mt--)_a.pop();Re.predBGs.COB=_a,$a=i(_a[_a.length-1]),va=Math.max(va,i(_a[_a.length-1]))}if(Ca>0||Wa>0){if(wa){for(ya.forEach((function(e,a,t){t[a]=i(Math.min(401,Math.max(39,e)))})),mt=ya.length-1;mt>12&&ya[mt-1]===ya[mt];mt--)ya.pop();Re.predBGs.UAM=ya,Ja=i(ya[ya.length-1]),ya[ya.length-1]&&(va=Math.max(va,i(ya[ya.length-1])))}Re.eventualBG=va}console.error("UAM Impact:"+Fa+"mg/dL per 5m; UAM Duration:"+nt+"hours"),Ka=Math.max(39,Ka),Qa=Math.max(39,Qa),Va=Math.max(39,Va),Na=i(Ka);var ut=_.mealCOB/_.carbs;Za=i(Va<999&&Qa<999?(1-ut)*UAMpredBG+ut*COBpredBG:Qa<999?(rt+COBpredBG)/2:Va<999?(rt+UAMpredBG)/2:rt),tt>Za&&(Za=tt),Xa=i(Xa=Da||Wa>0?wa?ut*Ya+(1-ut)*et:Ya:wa?et:at);var dt=Va;if(tt<sa)dt=(Va+tt)/2;else if(tt<$e){var ct=(tt-sa)/($e-sa);dt=(Va+(Va*ct+tt*(1-ct)))/2}else tt>Va&&(dt=(Va+tt)/2);if(dt=i(dt),_.carbs)if(!wa&&Qa<999)Na=i(Math.max(Ka,Qa));else if(Qa<999){var gt=ut*Qa+(1-ut)*dt;Na=i(Math.max(Ka,Qa,gt))}else Na=wa?dt:Xa;else wa&&(Na=i(Math.max(Ka,dt)));Na=Math.min(Na,Za),process.stderr.write("minPredBG: "+Na+" minIOBPredBG: "+Ka+" minZTGuardBG: "+tt),Qa<999&&process.stderr.write(" minCOBPredBG: "+Qa),Va<999&&process.stderr.write(" minUAMPredBG: "+Va),console.error(" avgPredBG:"+Za+" COB/Carbs:"+_.mealCOB+"/"+_.carbs),it>Le&&(Na=Math.min(Na,it)),Re.COB=_.mealCOB,Re.IOB=r.iob,Re.BGI=n(pa,v),Re.deviation=n(fa,v),Re.ISF=n(ua,v),Re.CR=i(v.carb_ratio,2),Re.target_bg=n($e,v),Re.TDD=i(ie,2),Re.reason=s+", COB: "+Re.COB+", Dev: "+Re.deviation+", BGI: "+Re.BGI+", CR: "+Re.CR+", Target: "+Re.target_bg+", minPredBG "+n(Na,v)+", minGuardBG "+n(Xa,v)+", IOBpredBG "+n(Ha,v),$a>0&&(Re.reason+=", COBpredBG "+n($a,v)),Ja>0&&(Re.reason+=", UAMpredBG "+n(Ja,v)),Re.reason+=tddReason,Re.reason+="; ";var ht=ba;ht<40&&(ht=Math.min(Xa,ht));var pt,ft=sa-ht,bt=240,vt=240;if(_.mealCOB>0&&(Ca>0||Wa>0)){for(mt=0;mt<_a.length;mt++)if(_a[mt]<Je){bt=5*mt;break}for(mt=0;mt<_a.length;mt++)if(_a[mt]<sa){vt=5*mt;break}}else{for(mt=0;mt<Ma.length;mt++)if(Ma[mt]<Je){bt=5*mt;break}for(mt=0;mt<Ma.length;mt++)if(Ma[mt]<sa){vt=5*mt;break}}Sa&&Xa<sa&&(console.error("minGuardBG "+n(Xa,v)+" projected below "+n(sa,v)+" - disabling SMB"),Sa=!1),void 0===v.maxDelta_bg_threshold&&(pt=.2),void 0!==v.maxDelta_bg_threshold&&(pt=Math.min(v.maxDelta_bg_threshold,.4)),He>pt*Le&&(console.error("maxDelta "+n(He,v)+" > "+100*pt+"% of BG "+n(Le,v)+" - disabling SMB"),Re.reason+="maxDelta "+n(He,v)+" > "+100*pt+"% of BG "+n(Le,v)+" - SMB disabled!, ",Sa=!1),console.error("BG projected to remain above "+n(Je,v)+" for "+bt+"minutes"),(vt<240||bt<60)&&console.error("BG projected to remain above "+n(sa,v)+" for "+vt+"minutes");var Bt=vt,_t=v.current_basal*ua*Bt/60,Mt=Math.max(0,_.mealCOB-.25*_.carbs),yt=(ft-_t)/csf-Mt;_t=i(_t),yt=i(yt),console.error("naive_eventualBG:",ba,"bgUndershoot:",ft,"zeroTempDuration:",Bt,"zeroTempEffect:",_t,"carbsReq:",yt),"Could not parse clock data"==_.reason?console.error("carbsReq unknown: Could not parse clock data"):yt>=v.carbsReqThreshold&&vt<=45&&(Re.carbsReq=yt,Re.reason+=yt+" add'l carbs req w/in "+vt+"m; ");var xt=0;if(Le<sa&&r.iob<20*-v.current_basal/60&&Ne>0&&Ne>Ba)Re.reason+="IOB "+r.iob+" < "+i(20*-v.current_basal/60,2),Re.reason+=" and minDelta "+n(Ne,v)+" > expectedDelta "+n(Ba,v)+"; ";else if(Le<sa||Xa<sa)return Re.reason+="minGuardBG "+n(Xa,v)+"<"+n(sa,v),xt=i(60*((ft=$e-Xa)/ua)/v.current_basal),xt=30*i(xt/30),xt=Math.min(120,Math.max(30,xt)),M.setTempBasal(0,xt,v,Re,t);if(v.skip_neutral_temps&&Re.deliverAt.getMinutes()>=55)return Re.reason+="; Canceling temp at "+Re.deliverAt.getMinutes()+"m past the hour. ",M.setTempBasal(0,0,v,Re,t);var St=0,wt=je;if(va<Je){if(Re.reason+="Eventual BG "+n(va,v)+" < "+n(Je,v),Ne>Ba&&Ne>0&&!yt)return ba<40?(Re.reason+=", naive_eventualBG < 40. ",M.setTempBasal(0,30,v,Re,t)):(e.delta>Ne?Re.reason+=", but Delta "+n(We,v)+" > expectedDelta "+n(Ba,v):Re.reason+=", but Min. Delta "+Ne.toFixed(2)+" > Exp. Delta "+n(Ba,v),t.duration>15&&o(je,v)===o(t.rate,v)?(Re.reason+=", temp "+t.rate+" ~ req "+je+"U/hr. ",Re):(Re.reason+="; setting current basal of "+je+" as temp. ",M.setTempBasal(je,30,v,Re,t)));St=i(St=2*Math.min(0,(va-$e)/ua),2);var Ct=Math.min(0,(ba-$e)/ua);if(Ct=i(Ct,2),Ne<0&&Ne>Ba)St=i(St*(Ne/Ba),2);if(wt=o(wt=je+2*St,v),t.duration*(t.rate-je)/60<Math.min(St,Ct)-.3*je)return Re.reason+=", "+t.duration+"m@"+t.rate.toFixed(2)+" is a lot less than needed. ",M.setTempBasal(wt,30,v,Re,t);if(void 0!==t.rate&&t.duration>5&&wt>=.8*t.rate)return Re.reason+=", temp "+t.rate+" ~< req "+wt+"U/hr. ",Re;if(wt<=0){if((xt=i(60*((ft=$e-ba)/ua)/v.current_basal))<0?xt=0:(xt=30*i(xt/30),xt=Math.min(120,Math.max(0,xt))),xt>0)return Re.reason+=", setting "+xt+"m zero temp. ",M.setTempBasal(wt,xt,v,Re,t)}else Re.reason+=", setting "+wt+"U/hr. ";return M.setTempBasal(wt,30,v,Re,t)}if(Ne<Ba&&(!y||!Sa))return e.delta<Ne?Re.reason+="Eventual BG "+n(va,v)+" > "+n(Je,v)+" but Delta "+n(We,v)+" < Exp. Delta "+n(Ba,v):Re.reason+="Eventual BG "+n(va,v)+" > "+n(Je,v)+" but Min. Delta "+Ne.toFixed(2)+" < Exp. Delta "+n(Ba,v),t.duration>15&&o(je,v)===o(t.rate,v)?(Re.reason+=", temp "+t.rate+" ~ req "+je+"U/hr. ",Re):(Re.reason+="; setting current basal of "+je+" as temp. ",M.setTempBasal(je,30,v,Re,t));if(Math.min(va,Na)<Ke&&(!y||!Sa))return Re.reason+=n(va,v)+"-"+n(Na,v)+" in range: no temp required",t.duration>15&&o(je,v)===o(t.rate,v)?(Re.reason+=", temp "+t.rate+" ~ req "+je+"U/hr. ",Re):(Re.reason+="; setting current basal of "+je+" as temp. ",M.setTempBasal(je,30,v,Re,t));if(va>=Ke&&(Re.reason+="Eventual BG "+n(va,v)+" >= "+n(Ke,v)+", "),r.iob>Ve)return Re.reason+="IOB "+i(r.iob,2)+" > max_iob "+Ve,t.duration>15&&o(je,v)===o(t.rate,v)?(Re.reason+=", temp "+t.rate+" ~ req "+je+"U/hr. ",Re):(Re.reason+="; setting current basal of "+je+" as temp. ",M.setTempBasal(je,30,v,Re,t));(St=i((Math.min(Na,va)-$e)/ua,2))>Ve-r.iob?(console.error("SMB limited by maxIOB: "+Ve-r.iob+" (. insulinReq: "+St+" U)"),Re.reason+="max_iob "+Ve+", ",St=Ve-r.iob):console.error("SMB not limited by maxIOB ( insulinReq: "+St+" U)."),wt=o(wt=je+2*St,v),St=i(St,3),Re.insulinReq=St;var Dt=i((new Date(ke).getTime()-r.lastBolusTime)/6e4,1);if(y&&Sa&&Le>sa){var Ft=i(_.mealCOB/v.carb_ratio,3);if(v.use_autoisf)It=v.smb_max_range_extension;else{console.error("autoISF disabled, SMB range extension disabled");var It=1}It>1&&console.error("SMB max range extended from default by factor "+It);var Gt=0;void 0===v.maxSMBBasalMinutes?(Gt=i(It*v.current_basal*30/60,1),console.error("profile.maxSMBBasalMinutes undefined: defaulting to 30m"),St>Gt&&(console.error("SMB limited by maxBolus: "+Gt+" ( "+St+" U)"),a)):r.iob>Ft&&r.iob>0?(console.error("IOB"+r.iob+"> COB"+_.mealCOB+"; mealInsulinReq ="+Ft),v.maxUAMSMBBasalMinutes?(console.error("profile.maxUAMSMBBasalMinutes: "+v.maxUAMSMBBasalMinutes+", profile.current_basal: "+v.current_basal),Gt=i(It*v.current_basal*v.maxUAMSMBBasalMinutes/60,1)):(console.error("profile.maxUAMSMBBasalMinutes undefined: defaulting to 30m"),Gt=i(30*v.current_basal/60,1)),St>Gt?console.error("SMB limited by maxUAMSMBBasalMinutes [ "+v.maxUAMSMBBasalMinutes+"m ]: "+Gt+"U ( "+St+"U )"):console.error("SMB is not limited by maxUAMSMBBasalMinutes. ( insulinReq: "+St+"U )")):(console.error("profile.maxSMBBasalMinutes: "+v.maxSMBBasalMinutes+", profile.current_basal: "+v.current_basal),St>(Gt=i(It*v.current_basal*v.maxSMBBasalMinutes/60,1))?console.error("SMB limited by maxSMBBasalMinutes: "+v.maxSMBBasalMinutes+"m ]: "+Gt+"U ( insulinReq: "+St+"U )"):console.error("SMB is not limited by maxSMBBasalMinutes. ( insulinReq: "+St+"U )"));var Tt=v.bolus_increment,Ut=1/Tt,Ot=b(v,Le,$e);Ot>.5&&console.error("SMB Delivery Ratio increased from default 0.5 to "+i(Ot,2));var Rt=Math.min(St*Ot,Gt);Rt=Math.floor(Rt*Ut)/Ut,xt=i(60*(($e-(ba+Ka)/2)/ua)/v.current_basal),St>0&&Rt<Tt&&(xt=0);var At=0;xt<=0?xt=0:xt>=30?(xt=30*i(xt/30),xt=Math.min(60,Math.max(0,xt))):(At=i(je*xt/30,2),xt=30),Re.reason+=" insulinReq "+St,Rt>=Gt&&(Re.reason+="; maxBolus "+Gt),xt>0&&(Re.reason+="; setting "+xt+"m low temp of "+At+"U/h"),Re.reason+=". ";var Pt=3;v.SMBInterval&&(Pt=Math.min(10,Math.max(1,v.SMBInterval)));var jt=i(Pt-Dt,0),kt=i(60*(Pt-Dt),0)%60;if(console.error("naive_eventualBG "+ba+","+xt+"m "+At+"U/h temp needed; last bolus "+Dt+"m ago; maxBolus: "+Gt),Dt>Pt?Rt>0&&(Re.units=Rt,Re.reason+="Microbolusing "+Rt+"U. "):Re.reason+="Waiting "+jt+"m "+kt+"s to microbolus again. ",xt>0)return Re.rate=At,Re.duration=xt,Re}var Wt=M.getMaxSafeBasal(v);return wt>Wt&&(Re.reason+="adj. req. rate: "+wt+" to maxSafeBasal: "+i(Wt,2)+", ",wt=o(Wt,v)),t.duration*(t.rate-je)/60>=2*St?(Re.reason+=t.duration+"m@"+t.rate.toFixed(2)+" > 2 * insulinReq. Setting temp basal of "+wt+"U/hr. ",M.setTempBasal(wt,30,v,Re,t)):void 0===t.duration||0===t.duration?(Re.reason+="no temp, setting "+wt+"U/hr. ",M.setTempBasal(wt,30,v,Re,t)):t.duration>5&&o(wt,v)<=o(t.rate,v)?(Re.reason+="temp "+t.rate+" >~ req "+wt+"U/hr. ",Re):(Re.reason+="temp "+t.rate+"<"+wt+"U/hr. ",M.setTempBasal(wt,30,v,Re,t))}},6880:(e,a,t)=>{var r=t(6654);e.exports=function(e,a){var t=20;void 0!==a&&"string"==typeof a.model&&(r(a.model,"54")||r(a.model,"23"))&&(t=40);return e<1?Math.round(e*t)/t:e<10?Math.round(20*e)/20:Math.round(10*e)/10}},2705:(e,a,t)=>{var r=t(5639).Symbol;e.exports=r},9932:e=>{e.exports=function(e,a){for(var t=-1,r=null==e?0:e.length,o=Array(r);++t<r;)o[t]=a(e[t],t,e);return o}},9750:e=>{e.exports=function(e,a,t){return e==e&&(void 0!==t&&(e=e<=t?e:t),void 0!==a&&(e=e>=a?e:a)),e}},4239:(e,a,t)=>{var r=t(2705),o=t(9607),i=t(2333),n=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":n&&n in Object(e)?o(e):i(e)}},531:(e,a,t)=>{var r=t(2705),o=t(9932),i=t(1469),n=t(3448),s=r?r.prototype:void 0,l=s?s.toString:void 0;e.exports=function e(a){if("string"==typeof a)return a;if(i(a))return o(a,e)+"";if(n(a))return l?l.call(a):"";var t=a+"";return"0"==t&&1/a==-Infinity?"-0":t}},7561:(e,a,t)=>{var r=t(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},1957:(e,a,t)=>{var r="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g;e.exports=r},9607:(e,a,t)=>{var r=t(2705),o=Object.prototype,i=o.hasOwnProperty,n=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var a=i.call(e,s),t=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=n.call(e);return r&&(a?e[s]=t:delete e[s]),o}},2333:e=>{var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},5639:(e,a,t)=>{var r=t(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},7990:e=>{var a=/\s/;e.exports=function(e){for(var t=e.length;t--&&a.test(e.charAt(t)););return t}},6654:(e,a,t)=>{var r=t(9750),o=t(531),i=t(554),n=t(9833);e.exports=function(e,a,t){e=n(e),a=o(a);var s=e.length,l=t=void 0===t?s:r(i(t),0,s);return(t-=a.length)>=0&&e.slice(t,l)==a}},1469:e=>{var a=Array.isArray;e.exports=a},3218:e=>{e.exports=function(e){var a=typeof e;return null!=e&&("object"==a||"function"==a)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,a,t)=>{var r=t(4239),o=t(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},8601:(e,a,t)=>{var r=t(4841),o=1/0;e.exports=function(e){return e?(e=r(e))===o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:(e,a,t)=>{var r=t(8601);e.exports=function(e){var a=r(e),t=a%1;return a==a?t?a-t:a:0}},4841:(e,a,t)=>{var r=t(7561),o=t(3218),i=t(3448),n=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,m=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=o(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var t=s.test(e);return t||l.test(e)?m(e.slice(2),t?2:8):n.test(e)?NaN:+e}},9833:(e,a,t)=>{var r=t(531);e.exports=function(e){return null==e?"":r(e)}}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var o=r(5546);freeaps_determineBasal=o})();