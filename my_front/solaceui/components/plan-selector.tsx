import type { NextPage } from "next";
import styles from "./plan-selector.module.css";

export type PlanSelectorType = {
  className?: string;
  text?: string;
  perQuarter?: string;
  text1?: string;
  perQuarter1?: string;
  text2?: string;
  perQuarter2?: string;

  /** Action props */
  onButtonDefaultClick?: () => void;
  onButtonDefault1Click?: () => void;
  onButtonDefault2Click?: () => void;
};

const PlanSelector: NextPage<PlanSelectorType> = ({
  className = "",
  text,
  perQuarter,
  text1,
  perQuarter1,
  text2,
  perQuarter2,
  onButtonDefaultClick,
  onButtonDefault1Click,
  onButtonDefault2Click,
}) => {
  return (
    <section className={[styles.planSelector, className].join(" ")}>
      <div className={styles.solaceFarewellPlans}>
        <div className={styles.plansSectionvariant4}>
          <div className={styles.pricingSection}>
            <div className={styles.eachPricing}>
              <div className={styles.textWrapper}>
                <div className={styles.text}>Pink Diamond Plan</div>
              </div>
              <div className={styles.planAmountWrapperWrapper}>
                <div className={styles.planAmountWrapper}>
                  <div className={styles.priceWrapper}>
                    <div className={styles.text1}>{text}</div>
                  </div>
                  <div className={styles.textContainer}>
                    <div className={styles.text2}>
                      <p className={styles.perQuarter}>{perQuarter}</p>
                      <p className={styles.perBeneficiary}>Per Beneficiary</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.modelSpecsWrapper}>
                <div className={styles.additionalFeaturesWrapper}>
                  <div className={styles.text3}>
                    <p
                      className={styles.serviceBenefitsWorth}
                    >{`Service Benefits worth ₦2m `}</p>
                    <p className={styles.tcApply}>{`(T&C Apply)`}</p>
                  </div>
                  <div className={styles.additionalFeaturesCollection}>
                    <div className={styles.eachAdditionalFeature}>
                      <img
                        className={styles.check1Traced}
                        loading="lazy"
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text4}>
                        <p
                          className={styles.intrastateCorpseTransportati}
                        >{`Intrastate corpse transportation `}</p>
                        <p className={styles.toMortuary}>to mortuary.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature1}>
                      <img
                        className={styles.check1Traced1}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text5}>
                        <p
                          className={styles.mortuaryExpensesCovered}
                        >{`Mortuary expenses covered `}</p>
                        <p className={styles.forUpTo}>for up to 90 days.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature2}>
                      <img
                        className={styles.check1Traced2}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text6}>Basic casket provided.</div>
                    </div>
                    <div className={styles.eachAdditionalFeature3}>
                      <img
                        className={styles.check1Traced3}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text7}>
                        Musical band for procession.
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature4}>
                      <img
                        className={styles.check1Traced4}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text8}>
                        <p
                          className={styles.intrastateTransportationTo}
                        >{`Intrastate transportation to `}</p>
                        <p className={styles.lyingInState}>
                          lying in state venue.
                        </p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature5}>
                      <img
                        className={styles.check1Traced5}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text9}>
                        Venue setup and decoration.
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature6}>
                      <img
                        className={styles.check1Traced6}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text10}>
                        <p
                          className={styles.intrastateTransportationTo1}
                        >{`Intrastate transportation to `}</p>
                        <p className={styles.church}>church.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature7}>
                      <img
                        className={styles.check1Traced7}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text11}>
                        Basic tomb preparation.
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature8}>
                      <img
                        className={styles.check1Traced8}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text12}>
                        <p
                          className={styles.intrastateTransportationTo2}
                        >{`Intrastate transportation to `}</p>
                        <p className={styles.burialGround}>burial ground.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature9}>
                      <img
                        className={styles.check1Traced9}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text13}>
                        <p
                          className={styles.professionalUndertakers}
                        >{`4 professional undertakers `}</p>
                        <p className={styles.for1Day}>for 1 day.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature10}>
                      <img
                        className={styles.check1Traced10}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text14}>
                        <p
                          className={styles.professionalVideoCoverage}
                        >{`Professional video coverage `}</p>
                        <p className={styles.for1Day1}>for 1 day.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature11}>
                      <img
                        className={styles.check1Traced11}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text15}>Free consultation.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.buttondefaultWrapper}>
                <button
                  className={styles.buttondefault}
                  onClick={onButtonDefaultClick}
                >
                  <div className={styles.buttonBg} />
                  <div className={styles.buttonText}>Subscribe</div>
                </button>
              </div>
            </div>
            <div className={styles.eachPricing1}>
              <div className={styles.textFrame}>
                <div className={styles.text16}>Blue Diamond Plan</div>
              </div>
              <div className={styles.planAmountWrapperContainer}>
                <div className={styles.planAmountWrapper1}>
                  <div className={styles.priceWrapper1}>
                    <div className={styles.text17}>{text1}</div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.text18}>
                      <p className={styles.perQuarter1}>{perQuarter1}</p>
                      <p className={styles.perBeneficiary1}>Per Beneficiary</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.modelSpecsWrapper1}>
                <div className={styles.additionalFeaturesWrapper1}>
                  <p className={styles.text19}>
                    <span
                      className={styles.serviceBenefitsWorth1}
                    >{`Service Benefits worth ₦4m `}</span>
                    <span className={styles.tcApply1}>{`(T&C Apply)  `}</span>
                  </p>
                  <div className={styles.additionalFeaturesCollection1}>
                    <div className={styles.eachAdditionalFeature12}>
                      <img
                        className={styles.icon}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text20}>
                        <p
                          className={styles.intrastateCorpseTransportati1}
                        >{`Intrastate corpse transportation `}</p>
                        <p className={styles.toMortuary1}>to mortuary.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature13}>
                      <img
                        className={styles.icon1}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text21}>
                        <p
                          className={styles.mortuaryExpensesCovered1}
                        >{`Mortuary expenses covered `}</p>
                        <p className={styles.forUpTo1}>for up to 180 days.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature14}>
                      <img
                        className={styles.icon2}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text22}>
                        Modern casket provided.
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature15}>
                      <img
                        className={styles.icon3}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text23}>
                        Musical band for procession.
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature16}>
                      <img
                        className={styles.icon4}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text24}>
                        <p
                          className={styles.intrastateTransportationTo3}
                        >{`Intrastate transportation to `}</p>
                        <p className={styles.lyingInState1}>
                          lying in state venue.
                        </p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature17}>
                      <img
                        className={styles.icon5}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text25}>
                        Venue setup and decoration.
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature18}>
                      <img
                        className={styles.icon6}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text26}>
                        <p
                          className={styles.intrastateTransportationTo4}
                        >{`Intrastate transportation to `}</p>
                        <p className={styles.church1}>church.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature19}>
                      <img
                        className={styles.icon7}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text27}>
                        Basic tomb preparation.
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature20}>
                      <img
                        className={styles.icon8}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text28}>
                        <p
                          className={styles.intrastateTransportationTo5}
                        >{`Intrastate transportation to `}</p>
                        <p className={styles.burialGround1}>burial ground.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature21}>
                      <img
                        className={styles.icon9}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text29}>
                        <p
                          className={styles.professionalUndertakersFor}
                        >{`5 professional undertakers for `}</p>
                        <p className={styles.upTo2}>up to 2 days.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature22}>
                      <img
                        className={styles.icon10}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text30}>
                        <p
                          className={styles.professionalVideoCoverage1}
                        >{`Professional video coverage `}</p>
                        <p className={styles.for2Days}>for 2 days.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature23}>
                      <img
                        className={styles.icon11}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text31}>Free consultation.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.buttondefaultContainer}>
                <button
                  className={styles.buttondefault1}
                  onClick={onButtonDefault1Click}
                >
                  <div className={styles.buttonBg1} />
                  <div className={styles.buttonText1}>Subscribe</div>
                </button>
              </div>
            </div>
            <div className={styles.eachPricing2}>
              <div className={styles.textWrapper1}>
                <div className={styles.text32}>Red Diamond Plan</div>
              </div>
              <div className={styles.planAmountWrapperFrame}>
                <div className={styles.planAmountWrapper2}>
                  <div className={styles.priceWrapper2}>
                    <div className={styles.text33}>{text2}</div>
                  </div>
                  <div className={styles.text34}>
                    <p className={styles.perQuarter2}>{perQuarter2}</p>
                    <p className={styles.perBeneficiary2}>Per Beneficiary</p>
                  </div>
                </div>
              </div>
              <div className={styles.modelSpecsWrapper2}>
                <div className={styles.additionalFeaturesWrapper2}>
                  <div className={styles.text35}>
                    <p
                      className={styles.serviceBenefitsWorth2}
                    >{`Service Benefits worth ₦8m `}</p>
                    <p className={styles.tcApply2}>{`(T&C Apply)`}</p>
                  </div>
                  <div className={styles.additionalFeaturesCollection2}>
                    <div className={styles.eachAdditionalFeature24}>
                      <img
                        className={styles.icon12}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text36}>
                        <p
                          className={styles.intrastateCorpse}
                        >{`Intrastate corpse `}</p>
                        <p className={styles.transportationToMortuary}>
                          transportation to mortuary.
                        </p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature25}>
                      <img
                        className={styles.icon13}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text37}>
                        <p
                          className={styles.mortuaryExpensesCovered2}
                        >{`Mortuary expenses covered for `}</p>
                        <p className={styles.upTo365}>up to 365 days.</p>
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature26}>
                      <img
                        className={styles.icon14}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text38}>
                        High Premium casket provided.
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature27}>
                      <img
                        className={styles.icon15}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text39}>
                        Musical band for procession.
                      </div>
                    </div>
                    <div className={styles.eachAdditionalFeature28}>
                      <img
                        className={styles.icon16}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text40}>
                        <p
                          className={styles.interstateTransportationTo}
                        >{`Interstate transportation to `}</p>
                        <p className={styles.hometown}>hometown.</p>
                      </div>
                    </div>
                    <div className={styles.iconParent}>
                      <img
                        className={styles.icon17}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <p className={styles.text41}>
                        <span
                          className={styles.intrastateTransportationTo6}
                        >{`Intrastate transportation to `}</span>
                        <span className={styles.lyingInState2}>
                          lying in state venue.
                        </span>
                      </p>
                    </div>
                    <div className={styles.iconGroup}>
                      <img
                        className={styles.icon18}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text42}>
                        Venue setup and decoration.
                      </div>
                    </div>
                    <div className={styles.iconContainer}>
                      <img
                        className={styles.icon19}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text43}>
                        <p
                          className={styles.intrastateTransportationTo7}
                        >{`Intrastate transportation to `}</p>
                        <p className={styles.church2}>church.</p>
                      </div>
                    </div>
                    <div className={styles.iconParent1}>
                      <img
                        className={styles.icon20}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text44}>
                        Advanced tomb preparation.
                      </div>
                    </div>
                    <div className={styles.iconParent2}>
                      <img
                        className={styles.icon21}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text45}>
                        <p
                          className={styles.intrastateTransportationTo8}
                        >{`Intrastate transportation to `}</p>
                        <p className={styles.burialGround2}>burial ground.</p>
                      </div>
                    </div>
                    <div className={styles.iconParent3}>
                      <img
                        className={styles.icon22}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text46}>
                        <p
                          className={styles.professionalUndertakers1}
                        >{`5 professional undertakers `}</p>
                        <p className={styles.forUpTo2}>for up to 3 days.</p>
                      </div>
                    </div>
                    <div className={styles.iconParent4}>
                      <img
                        className={styles.icon23}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text47}>
                        Professional grief counseling.
                      </div>
                    </div>
                    <div className={styles.iconParent5}>
                      <img
                        className={styles.icon24}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <p className={styles.text48}>
                        Professional video coverage + streaming of funeral for
                        up to 3 days.
                      </p>
                    </div>
                    <div className={styles.iconParent6}>
                      <img
                        className={styles.icon25}
                        alt=""
                        src="/check-1-traced1.svg"
                      />
                      <div className={styles.text49}>
                        <p
                          className={styles.freeConsultation}
                        >{`Free consultation + dedicated `}</p>
                        <p className={styles.eventManager}>event manager.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.buttondefaultFrame}>
                <button
                  className={styles.buttondefault2}
                  onClick={onButtonDefault2Click}
                >
                  <div className={styles.buttonBg2} />
                  <div className={styles.buttonText2}>Subscribe</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSelector;
