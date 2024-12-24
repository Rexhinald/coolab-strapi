import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFadingTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_fading_titles';
  info: {
    description: '';
    displayName: 'fading_title';
  };
  attributes: {
    first_text: Schema.Attribute.String;
    highlights: Schema.Attribute.Component<'shared.text', true>;
    last_text: Schema.Attribute.String;
  };
}

export interface SharedHomeAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_about_uses';
  info: {
    displayName: 'home_about_us';
  };
  attributes: {
    body: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomeCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_cards';
  info: {
    description: '';
    displayName: 'home_card';
  };
  attributes: {
    body: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProduct extends Struct.ComponentSchema {
  collectionName: 'components_shared_products';
  info: {
    description: '';
    displayName: 'product';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'files' | 'images'>;
    period: Schema.Attribute.String;
    price: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'social_media';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    displayName: 'team_member';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface SharedTermsAndConditions extends Struct.ComponentSchema {
  collectionName: 'components_shared_terms_and_conditions';
  info: {
    description: '';
    displayName: 'terms_and_conditions';
  };
  attributes: {
    rules: Schema.Attribute.Component<'shared.text', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    body: Schema.Attribute.Text;
    person: Schema.Attribute.String;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    description: '';
    displayName: 'text';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.fading-title': SharedFadingTitle;
      'shared.home-about-us': SharedHomeAboutUs;
      'shared.home-card': SharedHomeCard;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.product': SharedProduct;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-media': SharedSocialMedia;
      'shared.team-member': SharedTeamMember;
      'shared.terms-and-conditions': SharedTermsAndConditions;
      'shared.testimonial': SharedTestimonial;
      'shared.text': SharedText;
    }
  }
}
