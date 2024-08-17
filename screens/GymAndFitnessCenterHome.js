import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const GymAndFitnessCenterHome = () => {
  return (
    <View style={styles.gymAndFitnessCenterHome}>
      <View style={[styles.typedarkLightBubbleHeader, styles.rowFlexBox]}>
        <View style={styles.bubbleContainer}>
          <View style={[styles.navLinks, styles.navFlexBox]}>
            <View style={[styles.navLink, styles.navFlexBox]}>
              <Text style={[styles.navLabel, styles.navLabelTypo]}>Inicio</Text>
            </View>
            <View style={[styles.navLink1, styles.navFlexBox]}>
              <Text style={[styles.navLabel, styles.navLabelTypo]}>
                Proyectos
              </Text>
            </View>
            <View style={[styles.navLink1, styles.navFlexBox]}>
              <Text style={[styles.navLabel, styles.navLabelTypo]}>Equipo</Text>
            </View>
          </View>
          <View style={[styles.navLinks1, styles.navFlexBox]}>
            <View style={[styles.navLink, styles.navFlexBox]}>
              <Text style={[styles.navLabel, styles.navLabelTypo]}>
                Nosotros
              </Text>
            </View>
            <View style={[styles.navLink1, styles.navFlexBox]}>
              <Text style={[styles.navLabel, styles.navLabelTypo]}>
                Instagram
              </Text>
            </View>
            <View style={[styles.navLink1, styles.navFlexBox]}>
              <Text style={[styles.navLabel, styles.navLabelTypo]}>
                Contacto
              </Text>
            </View>
          </View>
          <View style={styles.brand}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
            <Text style={[styles.brandname, styles.navLabelTypo]}>
              GymMaster
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.typeheroStackedCtaImageBo, styles.navSpaceBlock]}>
        <View style={[styles.copyComponent, styles.copyLayout]}>
          <View style={styles.headingText}>
            <Text
              style={[styles.heading, styles.headingTypo]}
              numberOfLines={3}
            >
              Transforma tu vida hoy
            </Text>
            <Text style={[styles.subheading, styles.content2SpaceBlock]}>
              Únete a nuestro gimnasio y cambia tu vida.
            </Text>
          </View>
          <View style={[styles.ctaButton, styles.buttonSpaceBlock]}>
            <View style={styles.textContainerFlexBox}>
              <Text style={[styles.cta, styles.ctaClr]}>Únete Ahora</Text>
            </View>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={[styles.imageLummi, styles.imageLayout]}
            contentFit="cover"
            source={require("../assets/image--lummi.png")}
          />
        </View>
      </View>
      <View style={[styles.typeimageBackgroundCentered, styles.navSpaceBlock]}>
        <Image
          style={[styles.imageLummiLuminancedar, styles.overlayPosition]}
          contentFit="cover"
          source={require("../assets/image--lummi-luminancedark.png")}
        />
        <View style={[styles.overlay, styles.overlayPosition]} />
        <View style={styles.textContent}>
          <Text style={[styles.heading1, styles.heading1Clr]}>
            Tu salud, nuestra prioridad.
          </Text>
          <Text style={[styles.description, styles.descriptionSpaceBlock]}>
            Descubre nuestros servicios
          </Text>
        </View>
      </View>
      <View style={styles.typetwoFeatureCards}>
        <View style={styles.content}>
          <View style={styles.copyLayout}>
            <Text style={[styles.heading2, styles.headingTypo]}>
              Entrena con los mejores
            </Text>
            <Text style={[styles.subheading1, styles.descriptionSpaceBlock]}>
              Conoce a nuestros entrenadores
            </Text>
          </View>
          <View style={[styles.cardsGrid, styles.cardsGridFlexBox]}>
            <View style={styles.bigCardBorder}>
              <View style={[styles.content1, styles.content1Layout]}>
                <View style={styles.contentContainer}>
                  <Text style={[styles.subheading2, styles.ctaTypo]}>
                    Tu mejor versión
                  </Text>
                  <View style={styles.content2SpaceBlock}>
                    <Text style={styles.heading3}>
                      Entrenamiento personalizado para ti
                    </Text>
                    <Text style={[styles.text, styles.descriptionSpaceBlock]}>
                      Programas adaptados a tus necesidades
                    </Text>
                  </View>
                </View>
                <View style={styles.cta1}>
                  <View style={styles.button}>
                    <Text style={[styles.cta2, styles.ctaTypo]}>
                      Empieza Hoy
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.imageLummi1, styles.content1Layout]}
                contentFit="cover"
                source={require("../assets/image--lummi1.png")}
              />
            </View>
            <View style={[styles.bigCard1, styles.bigCardBorder]}>
              <View style={[styles.content1, styles.content1Layout]}>
                <View style={styles.contentContainer}>
                  <Text style={[styles.subheading2, styles.ctaTypo]}>
                    Alcanza tus metas
                  </Text>
                  <View style={styles.content2SpaceBlock}>
                    <Text style={styles.heading3}>
                      Planes de entrenamiento efectivos
                    </Text>
                    <Text style={[styles.text, styles.descriptionSpaceBlock]}>
                      Resultados garantizados
                    </Text>
                  </View>
                </View>
                <View style={styles.cta1}>
                  <View style={styles.button}>
                    <Text style={[styles.cta2, styles.ctaTypo]}>
                      Ver Planes
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.imageLummi1, styles.content1Layout]}
                contentFit="cover"
                source={require("../assets/image--lummi2.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.property1smallHeadingLog,
          styles.typestackedSimpleFooterSpaceBlock,
        ]}
      >
        <Text style={[styles.heading5, styles.linkTypo]}>
          Utilizado por los mejores gimnasios
        </Text>
        <View style={styles.content5}>
          <Image
            style={[styles.companyLogoIcon, styles.companyIconLayout]}
            contentFit="cover"
            source={require("../assets/company-logo.png")}
          />
          <Image
            style={[styles.companyLogoIcon1, styles.companyIconLayout]}
            contentFit="cover"
            source={require("../assets/company-logo1.png")}
          />
          <Image
            style={[styles.companyLogoIcon2, styles.companyIconLayout]}
            contentFit="cover"
            source={require("../assets/company-logo2.png")}
          />
          <Image
            style={[styles.companyLogoIcon3, styles.companyIconLayout]}
            contentFit="cover"
            source={require("../assets/company-logo3.png")}
          />
          <Image
            style={[styles.companyLogoIcon4, styles.companyIconLayout]}
            contentFit="cover"
            source={require("../assets/company-logo4.png")}
          />
          <Image
            style={[styles.companyLogoIcon5, styles.companyIconLayout]}
            contentFit="cover"
            source={require("../assets/company-logo5.png")}
          />
          <Image
            style={[styles.companyLogoIcon3, styles.companyIconLayout]}
            contentFit="cover"
            source={require("../assets/company-logo6.png")}
          />
          <Image
            style={[styles.companyLogoIcon7, styles.companyIconLayout]}
            contentFit="cover"
            source={require("../assets/company-logo7.png")}
          />
          <Image
            style={[styles.companyLogoIcon8, styles.companyIconLayout]}
            contentFit="cover"
            source={require("../assets/company-logo8.png")}
          />
          <Image
            style={[styles.companyLogoIcon4, styles.companyIconLayout]}
            contentFit="cover"
            source={require("../assets/company-logo9.png")}
          />
        </View>
      </View>
      <View style={[styles.property1listForm, styles.navSpaceBlock]}>
        <View style={[styles.container, styles.cardsGridFlexBox]}>
          <View style={[styles.columnLeft, styles.columnLayout]}>
            <View style={[styles.copy, styles.copyLayout]}>
              <Text style={[styles.heading2, styles.headingTypo]}>
                Contáctanos
              </Text>
              <Text style={[styles.description1, styles.descriptionTypo]}>
                Estamos aquí para ayudarte
              </Text>
            </View>
            <View style={[styles.button2, styles.buttonSpaceBlock]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon-icon.png")}
              />
              <View
                style={[styles.textContainer1, styles.textContainerFlexBox]}
              >
                <Text style={[styles.cta5, styles.ctaTypo]}>Enviar Correo</Text>
              </View>
            </View>
          </View>
          <View style={[styles.columnRight, styles.columnLayout]}>
            <View style={styles.featureLayout}>
              <Image
                style={styles.iconIcon1}
                contentFit="cover"
                source={require("../assets/icon--icon.png")}
              />
              <View style={styles.featureCopy}>
                <Text
                  style={[styles.featureTitle, styles.linkTypo]}
                  numberOfLines={1}
                >
                  Correo
                </Text>
                <Text
                  style={[styles.featureDescription, styles.ctaTypo]}
                  numberOfLines={3}
                >
                  info@gymmaster.com
                </Text>
              </View>
            </View>
            <View style={[styles.feature011, styles.featureLayout]}>
              <Image
                style={styles.iconIcon1}
                contentFit="cover"
                source={require("../assets/icon--icon1.png")}
              />
              <View style={styles.featureCopy}>
                <Text
                  style={[styles.featureTitle, styles.linkTypo]}
                  numberOfLines={1}
                >
                  Teléfono
                </Text>
                <Text
                  style={[styles.featureDescription, styles.ctaTypo]}
                  numberOfLines={3}
                >
                  +1 (555) 123-4567
                </Text>
              </View>
            </View>
            <View style={[styles.feature011, styles.featureLayout]}>
              <Image
                style={styles.iconIcon1}
                contentFit="cover"
                source={require("../assets/icon--icon2.png")}
              />
              <View style={styles.featureCopy}>
                <Text
                  style={[styles.featureTitle, styles.linkTypo]}
                  numberOfLines={1}
                >
                  Ubicación
                </Text>
                <Text
                  style={[styles.featureDescription, styles.ctaTypo]}
                  numberOfLines={3}
                >
                  Calle Ficticia 123, Ciudad, País
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.typestackedSimpleFooter,
          styles.typestackedSimpleFooterSpaceBlock,
        ]}
      >
        <View style={styles.content6}>
          <View style={styles.logo}>
            <Text style={[styles.brandname1, styles.linkTypo]}>
              Nombre del Creador
            </Text>
          </View>
          <View style={[styles.links, styles.rowSpaceBlock]}>
            <Text style={[styles.link, styles.linkTypo]}>Nosotros</Text>
            <Text style={[styles.link1, styles.linkTypo]}>Trabajo</Text>
            <Text style={[styles.link1, styles.linkTypo]}>LinkedIn</Text>
            <Text style={[styles.link1, styles.linkTypo]}>Contacto</Text>
          </View>
        </View>
        <View style={styles.credits}>
          <View style={styles.divider} />
          <View style={[styles.row, styles.rowSpaceBlock]}>
            <Text style={[styles.brandNameAll, styles.ctaTypo]}>
              © 2024 GymMaster. Todos los derechos reservados.
            </Text>
            <View style={styles.footerLinks}>
              <Text style={[styles.brandNameAll, styles.ctaTypo]}>
                Política de Privacidad
              </Text>
              <Text style={[styles.link5, styles.ctaTypo]}>
                Términos de Servicio
              </Text>
              <Text style={[styles.link5, styles.ctaTypo]}>
                Configuración de Cookies
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  navFlexBox: {
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  navLabelTypo: {
    color: Color.colorWhitesmoke_200,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  navSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  copyLayout: {
    maxWidth: 800,
    width: "100%",
  },
  headingTypo: {
    fontFamily: FontFamily.domineRegular,
    alignSelf: "stretch",
  },
  content2SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  buttonSpaceBlock: {
    marginTop: 40,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.colorHotpink,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  ctaClr: {
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
  },
  imageLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  overlayPosition: {
    bottom: 0,
    overflow: "hidden",
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  heading1Clr: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  descriptionSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  cardsGridFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  content1Layout: {
    minWidth: 240,
    height: 364,
    flex: 1,
  },
  ctaTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
  },
  bigCardBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    flexWrap: "wrap",
    minWidth: 320,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  typestackedSimpleFooterSpaceBlock: {
    paddingVertical: Padding.p_61xl,
    paddingHorizontal: Padding.p_45xl,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  linkTypo: {
    lineHeight: 27,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.openSansRegular,
  },
  companyIconLayout: {
    height: 48,
    overflow: "hidden",
  },
  columnLayout: {
    minWidth: 230,
    justifyContent: "center",
  },
  descriptionTypo: {
    lineHeight: 31,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.openSansRegular,
  },
  textContainerFlexBox: {
    padding: Padding.p_9xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  featureLayout: {
    maxWidth: 400,
    minWidth: 272,
    width: 373,
    flexDirection: "row",
  },
  rowSpaceBlock: {
    marginTop: 32,
    flexDirection: "row",
  },
  navLabel: {
    fontSize: FontSize.size_xs,
    lineHeight: 19,
    textAlign: "left",
  },
  navLink: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  navLink1: {
    marginLeft: 16,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  navLinks: {
    zIndex: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  navLinks1: {
    zIndex: 1,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  brandname: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 8,
    textAlign: "left",
  },
  brand: {
    marginTop: -11.5,
    marginLeft: -60,
    top: "50%",
    left: "50%",
    zIndex: 2,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  bubbleContainer: {
    borderRadius: 64,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.colorGray_100,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  typedarkLightBubbleHeader: {
    padding: Padding.p_5xs,
    zIndex: 6,
    flexDirection: "row",
    overflow: "hidden",
    left: 0,
    right: 0,
    top: 0,
    justifyContent: "space-between",
    position: "absolute",
    alignItems: "center",
  },
  heading: {
    fontSize: 108,
    letterSpacing: -1.1,
    lineHeight: 119,
    textAlign: "center",
    color: Color.colorGray_100,
    overflow: "hidden",
  },
  subheading: {
    color: Color.colorDarkgray,
    lineHeight: 31,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "center",
  },
  headingText: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  cta: {
    lineHeight: 27,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.openSansRegular,
  },
  ctaButton: {
    height: 57,
    maxWidth: 360,
    width: "100%",
  },
  copyComponent: {
    minWidth: 304,
    justifyContent: "center",
    alignItems: "center",
  },
  imageLummi: {
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  imageContainer: {
    borderRadius: 32,
    height: 719,
    minWidth: 320,
    marginTop: 40,
    maxWidth: 800,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    width: "100%",
  },
  typeheroStackedCtaImageBo: {
    paddingVertical: 160,
    zIndex: 5,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  imageLummiLuminancedar: {
    maxHeight: "100%",
    maxWidth: "100%",
    zIndex: 0,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  heading1: {
    fontSize: 72,
    letterSpacing: -0.7,
    lineHeight: 78,
    fontFamily: FontFamily.domineRegular,
    alignSelf: "stretch",
  },
  description: {
    color: Color.colorWhite,
    textAlign: "center",
    lineHeight: 31,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.openSansRegular,
  },
  textContent: {
    maxWidth: 960,
    marginLeft: 48,
    zIndex: 2,
    alignItems: "center",
  },
  typeimageBackgroundCentered: {
    paddingVertical: 184,
    zIndex: 4,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  heading2: {
    fontSize: FontSize.size_37xl,
    lineHeight: 67,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  subheading1: {
    lineHeight: 27,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorDarkgray,
    textAlign: "left",
  },
  subheading2: {
    color: Color.colorGray_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  heading3: {
    fontSize: FontSize.size_9xl,
    lineHeight: 39,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    alignSelf: "stretch",
  },
  text: {
    lineHeight: 27,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  contentContainer: {
    alignSelf: "stretch",
  },
  cta2: {
    textAlign: "center",
    color: Color.colorGray_100,
  },
  button: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  cta1: {
    marginTop: 24,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  content1: {
    padding: Padding.p_13xl,
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
  },
  imageLummi1: {
    maxWidth: "100%",
    minWidth: 240,
    height: 364,
    overflow: "hidden",
  },
  bigCard1: {
    marginLeft: 24,
  },
  cardsGrid: {
    marginTop: 16,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  content: {
    maxWidth: 1200,
    width: "100%",
  },
  typetwoFeatureCards: {
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 120,
    zIndex: 3,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  heading5: {
    textAlign: "center",
    color: Color.colorGray_100,
    alignSelf: "stretch",
  },
  companyLogoIcon: {
    width: 140,
  },
  companyLogoIcon1: {
    width: 121,
    marginLeft: 32,
  },
  companyLogoIcon2: {
    width: 163,
    marginLeft: 32,
  },
  companyLogoIcon3: {
    width: 168,
    marginLeft: 32,
  },
  companyLogoIcon4: {
    width: 135,
    marginLeft: 32,
  },
  companyLogoIcon5: {
    width: 132,
    marginLeft: 32,
  },
  companyLogoIcon7: {
    width: 145,
    marginLeft: 32,
  },
  companyLogoIcon8: {
    width: 129,
    marginLeft: 32,
  },
  content5: {
    marginTop: 48,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  property1smallHeadingLog: {
    zIndex: 2,
  },
  description1: {
    marginTop: 12,
    color: Color.colorGray_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  copy: {
    justifyContent: "center",
  },
  cta5: {
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
  },
  textContainer1: {
    marginLeft: 4,
  },
  button2: {
    height: 53,
  },
  columnLeft: {
    flex: 1,
  },
  iconIcon1: {
    width: 32,
    height: 32,
  },
  featureTitle: {
    color: Color.colorGray_100,
    textAlign: "left",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  featureDescription: {
    marginTop: 8,
    alignSelf: "stretch",
    color: Color.colorDarkgray,
    textAlign: "left",
    overflow: "hidden",
  },
  featureCopy: {
    marginLeft: 16,
    flex: 1,
  },
  feature011: {
    marginTop: 24,
  },
  columnRight: {
    marginLeft: 40,
  },
  container: {
    borderRadius: 48,
    backgroundColor: Color.colorWhitesmoke_100,
    padding: Padding.p_45xl,
    maxWidth: 1024,
    alignItems: "center",
  },
  property1listForm: {
    paddingVertical: 96,
    zIndex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  brandname1: {
    color: Color.colorGray_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  logo: {
    overflow: "hidden",
  },
  link: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  link1: {
    marginLeft: 32,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  links: {
    justifyContent: "center",
    alignItems: "center",
  },
  content6: {
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: Color.colorGray_100,
    alignSelf: "stretch",
  },
  brandNameAll: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  link5: {
    marginLeft: 24,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  footerLinks: {
    flexDirection: "row",
  },
  row: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  credits: {
    marginTop: 64,
    alignSelf: "stretch",
    alignItems: "center",
  },
  typestackedSimpleFooter: {
    zIndex: 0,
  },
  gymAndFitnessCenterHome: {
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default GymAndFitnessCenterHome;
